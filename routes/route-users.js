const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {secret, userAuth} = require("../config/auth");
const bcrypt = require("bcryptjs");
const EmailManager = require("../service/email-manager");
const AddressDao = require("../dao/address-dao");
const CartDao = require("../dao/cart-dao");
const CartFoodDao = require("../dao/cartFood-dao");
const FoodDao = require("../dao/food-dao");
const LikedRestaurantDao = require("../dao/likedRestaurant-dao");
const OrderDao = require("../dao/order-dao");
const RestaurantDao = require("../dao/restaurant-dao");
const UserDao = require("../dao/user-dao");
const UserAddressDao = require("../dao/userAddress-dao");
const OwnerDao = require("../dao/owner-dao");
const ComplexDao = require("../dao/complex-dao");

router.get("/", async (req, res) => {
    const token = req.cookies.jwt;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    var name, role;
    var orders = [];
    var orderedfoods = [];
    
    if (username) {
        const user = await new UserDao().getUserByUsername(username);
        name = user.surname;
        role = user.role;

        orders = await new OrderDao().getOrdersByCustomer(username);
        for (var i = 0; i < orders.length; i++) {
            const orderfoods = await new ComplexDao().getOrderFoods(orders[i].cartid);
            orderedfoods.push(...orderfoods);
        }
    }

    const restaurants = await new RestaurantDao().getAllRestaurants();

    return res.render("index", {
        name: name,
        username: username,
        role: role,
        restaurants: restaurants,
        orders: orders,
        orderedfoods: orderedfoods,
        msg: req.cookies.msg 
    })
});

router.get('/api/foods', async(req, res) => {

    var foods = [];
    const restaurants = await new RestaurantDao().getAllRestaurants();

    for (let i = 0; i < restaurants.length; i++) {
        const food = await new FoodDao().getFoodsOfRestaurnat(restaurants[i].id);
        
        const foodWithResId = food.map(f => ({...f, resId: restaurants[i].id, resName: restaurants[i].name}));
        
        foods.push(...foodWithResId);
    }
    res.json(foods);
});


router.get("/register", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
            res.cookie("msg", "Már be vagy jelentkezve!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/");
        })
    }

    return res.render("register", {
        msg: req.cookies.msg,
        username: username,
        role: ""
    })
});


router.post("/registeruser", async (req, res) => {
    let {roles} = req.body;
    let {email} = req.body;
    let {username} = req.body;
    let {surname} = req.body;
    let {forename} = req.body;
    let {pswd} = req.body;
    let {pswdagain} = req.body;

    if (username.length > 20) {
        res.cookie("msg", "A felhasználónév maximum 20 karakteres lehet!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/register");
    }

    if (!roles || !email || !username || !surname || !forename || !pswd || !pswdagain) {
        res.cookie("msg", "Tölts ki minden mezőt!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/register");
    }

    let user = await new UserDao().getUserByUsername(username);
    if (user) {
        res.cookie("msg", "Már létezik fiók ilyen felhasználónévvel!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/register");
    }

    user = await new UserDao().getUserByEmail(email);
    if (user) {
        res.cookie("msg", "Már létezik fiók ilyen email cimmel!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/register");
    }

    if (pswd !== pswdagain) {
        res.cookie("msg", "A két jelszó nem egyezik!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/register");
    }
    if (roles !== "ROLE_RESTAURANT") {
        let {zipcode} = req.body;
        let {city} = req.body;
        let {primaryaddress} = req.body;
        let {secondaryaddress} = req.body;

        if (!zipcode || !city || !primaryaddress) {
            res.cookie("msg", "Nem megfelelő szállitási cim!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/register");
        }

        if (zipcode === "" || !Number.isInteger(Number(zipcode))) {
            res.cookie("msg", "Helytelen irányítószám!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/register");
        }

        const hash = await bcrypt.hash(pswd, 10);
        await new UserDao().addUser(username, email, hash, forename, surname, roles);
    
        await new CartDao().addCart(username, "cart");

        await new AddressDao().addAddress(city, zipcode, primaryaddress, secondaryaddress);
        const address = await new AddressDao().getAddressId(city, zipcode, primaryaddress, secondaryaddress);
        await new UserAddressDao().addUserAddress(username, address.id);
        await new EmailManager().sendEmail(email, "Wan fiók regisztráció", "Kedves " + surname + " " + forename + "!\n Köszönjük, hogy regisztráltál a Wan szolgáltatáshoz!");
    } else {
        let {restaurant_name} = req.body;
        let {rest_zipcode} = req.body;
        let {rest_city} = req.body;
        let {rest_primaryaddress} = req.body;
        let {rest_secondaryaddress} = req.body;
        let {monday} = req.body;
        let {tuesday} = req.body;
        let {wednesday} = req.body;
        let {thursday} = req.body;
        let {friday} = req.body;
        let {saturday} = req.body;
        let {sunday} = req.body;

        if (!rest_city || !rest_primaryaddress || !rest_zipcode || !restaurant_name) {
            res.cookie("msg", "Nem megfelelő Étterem adatok", {httpOnly: true, maxAge: 2000});
            return res.redirect("/register");
        }

        if (rest_zipcode === "" || !Number.isInteger(Number(rest_zipcode))) {
            res.cookie("msg", "Helytelen irányítószám!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/register");
        }

        const add = await new AddressDao().getAddressId(rest_city, rest_zipcode, rest_primaryaddress, rest_secondaryaddress);
        if (add) {
            res.cookie("msg", "Ezen a cimen már található étterem!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/register");
        }

        const hash = await bcrypt.hash(pswd, 10);
        await new UserDao().addUser(username, email, hash, forename, surname, roles);
    
        await new CartDao().addCart(username, "cart");

        await new AddressDao().addAddress(rest_city, rest_zipcode, rest_primaryaddress, rest_secondaryaddress);
        const address = await new AddressDao().getAddressId(rest_city, rest_zipcode, rest_primaryaddress, rest_secondaryaddress);

        if (!monday) { monday = "Zárva"; }
        if (!tuesday) { tuesday = "Zárva"; }
        if (!wednesday) { wednesday = "Zárva"; }
        if (!thursday) { thursday = "Zárva"; }
        if (!friday) { friday = "Zárva"; }
        if (!saturday) { saturday = "Zárva"; }
        if (!sunday) { sunday = "Zárva"; }

        await new RestaurantDao().addRestaurant(restaurant_name, address.id,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday);

        const restaurant = await new RestaurantDao().getRestaurantId(restaurant_name, address.id,
            monday,
            tuesday,
            wednesday,
            thursday,
            friday,
            saturday,
            sunday);

        await new OwnerDao().addOwner(username, restaurant.id);
        await new EmailManager().sendEmail(email, "Wan fiók regisztráció", "Kedves " + surname + " " + forename + "!\n Köszönjük, hogy regisztráltad az éttermedet a Wan szolgáltatáshoz!");
    }
    
    return res.redirect("/login");
});


router.get("/login", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
            res.cookie("msg", "Már be vagy jelentkezve!", {httpOnly: true, maxAge: 2000});
            return res.redirect("/");
        })
    }

    return res.render("login", {
        msg: req.cookies.msg,
        username: username,
        role: ""
    });
});


router.post("/loginuser", async (req, res) => {
    let {username} = req.body;
    let {password} = req.body;

    const user = await new UserDao().getUserByUsername(username);

    if (!user) {
        res.cookie("msg", "Nincs ilyen felhasználó!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/login");
    } else {
        bcrypt.compare(password, user.passhash).then(function(result) {
            if (result) {
                const token = jwt.sign({username: username}, secret);
                res.cookie("jwt", token, {httpOnly: true});
                res.cookie("msg", "Sikeres bejelentkezés!", {httpOnly: true, maxAge: 2000});
                return res.redirect("/");
            }
            else {
                res.cookie("msg", "Hibás jelszó!", {httpOnly: true, maxAge: 2000});
                return res.redirect("/login");
            }
        });
    }
});


router.get("/logout", async (req, res) => {
    res.cookie("jwt", "", {maxAge: 1});
    res.cookie("msg", "Sikeres kijelentkezés!", {httpOnly: true ,maxAge: 2000});
    res.redirect("/");
});


router.get("/account", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;

    if (!token) {
        res.cookie("msg", "Nem vagy bejelentkezve!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/");
    } else {
        jwt.verify(token, secret, async (err, decodedToken) => {
            let username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            const useraddresses = await new UserAddressDao().getUserAddresses(username);
            const address = await new AddressDao().getAddressById(useraddresses[0].addressid);
            const likedrestaurants = await new LikedRestaurantDao().getLikedRestaurants(username);
            var restaurants = [];
            for (var i = 0; i < likedrestaurants.length; i++) {
                const restaurant = await new RestaurantDao().getRestaurant(likedrestaurants[i].restaurantid);
                restaurants.push(restaurant);
            }

            return res.render("account", {
                username: username,
                role: user.role,
                email: user.email,
                user: user,
                address: address,
                favourites: restaurants,
                msg: msg
            })
        })
    }
});


router.get("/deleteuser", async (req, res) => {
    const token = req.cookies.jwt;
    var username;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    if (!username) { return res.redirect("/"); }

    await new ComplexDao().deleteUser(username);

    res.cookie("msg", "Fiók sikeresen törölve!", {httpOnly: true, maxAge: 2000});
    return res.redirect("/logout");
});



router.post("/addaddress", async (req, res) => {
    const token = req.cookies.jwt;
    var username;
    let {zip} = req.body;
    let {city} = req.body;
    let {add1} = req.body;
    let {add2} = req.body;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new AddressDao().addAddress(city, zip, add1, add2);
    let address = await new AddressDao().getAddressId(city, zip, add1, add2);
    await new UserAddressDao().addUserAddress(username, address.id);

    res.redirect("/account");
});


router.get("/deleteaddress/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const addressid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const useraddresses = await new UserAddressDao().deleteUserAddess(username, addressid);
    const links = await new UserAddressDao().getUserAddressesByAddress(addressid);
    if (links.length === 0) {
        await new AddressDao().deleteAddress(addressid);
    }

    res.redirect("/account");
});


router.post("/updateemail", async (req, res) => {
    const token = req.cookies.jwt;
    let {email} = req.body;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    if (!username) { return res.redirect("/"); }

    if(email.trim()==""){
        res.cookie("msg", "Az email nem érvényes!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/account");
    }
    await new UserDao().updateUserEmail(username, email);

    res.cookie("msg", "Email sikeresen frissitve!", {httpOnly: true, maxAge: 2000});
    return res.redirect("/account");
})


router.post("/updatepassword", async (req, res) => {
    const token = req.cookies.jwt;
    let {pass1} = req.body;
    let {pass2} = req.body;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    if (!username) { return res.redirect("/"); }

    if (pass1 !== pass2) { 
        res.cookie("msg", "A két jelszó nem egyezik meg!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/account");
    }
    if(pass1.trim()==""){
        res.cookie("msg", "Az jelszó nem érvényes!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/account");
    }

    const hash = await bcrypt.hash(pass1, 10);
    await new UserDao().updatePassword(username, hash);

    res.cookie("msg", "Jelszó sikeresen frissitve!", {httpOnly: true, maxAge: 2000});
    return res.redirect("/account");
});


router.post("/updateaddress/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const addressid = req.params.id;
    let {zip} = req.body;
    let {city} = req.body;
    let {add1} = req.body;
    let {add2} = req.body;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new AddressDao().updateAddress(addressid, zip, add1, add2, city);

    res.redirect("/account");
})


router.get("/restaurant/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const restaurantid = req.params.id;
    const msg = req.cookies.msg;
    var username;
    var role;
    var liked = false;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const likedrestaurant = await new LikedRestaurantDao().getLikedRestaurant(username, restaurantid);
    if (likedrestaurant) {
        liked = true;
    }

    const restaurant = await new RestaurantDao().getRestaurant(restaurantid);
    const address = await new AddressDao().getAddressById(restaurant.addressid);
    const foods = await new FoodDao().getFoodsOfRestaurnat(restaurantid);

    const user = await new UserDao().getUserByUsername(username);
    if (user) {
        role = user.role;
    }

    return res.render("restaurant", {
        username: username,
        restaurant: restaurant,
        liked: liked,
        foods: foods,
        address: address,
        msg: msg,
        role: role
    });
});

router.get("/likerestaurant/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const restaurantid = req.params.id;
    
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new LikedRestaurantDao().addLikedRestaurant(username, restaurantid);

    res.cookie("msg", "Sikeresen a kedvencek közé tetted!", {httpOnly: true, maxAge: 2000});
    res.redirect("/restaurant/" + restaurantid);
});


router.get("/removelike/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const restaurantid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new LikedRestaurantDao().deleteLikedRestaurant(username, restaurantid);

    res.cookie("msg", "Sikeres eltávolítottad a kedvencek közül!", {httpOnly: true, maxAge: 2000});
    res.redirect("/restaurant/" + restaurantid);
});


router.get("/food/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    const foodid = req.params.id;
    var username;
    var role;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            role = user.role;
        })
    }

    const food = await new FoodDao().getFood(foodid);
    if (!food) {
        res.redirect("/");
    }

    const restaurant = await new RestaurantDao().getRestaurant(food.restaurantid);

    return res.render("food", {
        username: username,
        role: role,
        msg: msg,
        food: food,
        restaurantname: restaurant.name
    });

});


router.get("/addtocart/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const foodid = req.params.id;
    var username;
    var role;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
        })
        const user = await new UserDao().getUserByUsername(username);
        role = user.role;
    }

    console.log(role);
    if(role !== "ROLE_USER"){
        console.log(role);
        res.cookie("msg", "Csak " + '"' + "rendelő" + '"' + " felhasználóval rendelhetsz!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/");
    }

    const cart = await new CartDao().getCurrentCart(username);
    const cartfoods = await new CartFoodDao().getCartFoods(cart.id);
    var incart = false;
    for (var i = 0; i < cartfoods.length; i++) {
        if (cartfoods[i].foodid == foodid) {
            await new CartFoodDao().updateCartFoodAmount(cart.id, foodid, cartfoods[i].amount + 1);
            incart = true;
            break;
        }
    }

    if (!incart) {
        await new CartFoodDao().addCartFood(cart.id, foodid, 1);
    }

    res.cookie("msg", "Étel sikeresen a kosárba helyezve", {httpOnly: true, maxAge: 2000});
    return res.redirect("/cart");
});


router.get("/removefromcart/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const foodid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const cart = await new CartDao().getCurrentCart(username);
    const cartfoods = await new CartFoodDao().getCartFoods(cart.id);

    var incart = false;
    for (var i = 0; i < cartfoods.length; i++) {
        if (cartfoods[i].foodid == foodid && cartfoods[i].amount > 1) {
            await new CartFoodDao().updateCartFoodAmount(cart.id, foodid, cartfoods[i].amount - 1);
            incart = true;
            break;
        }
    }

    if (!incart) {
        await new CartFoodDao().deleteCartFood(cart.id, foodid);
    }

    return res.redirect("/cart");
});


router.get("/cart", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    var username;
    var role;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            role = user.role;
        })
    } else {
        res.cookie("msg", "Nem vagy bejelentkezve!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/");
    }

    const cart = await new CartDao().getCurrentCart(username);
    const foods = await new ComplexDao().getCartFoods(cart.id);

    return res.render("cart", {
        username: username,
        foods: foods,
        msg: msg,
        role
    });
});

router.get("/orders", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    var username;
    var role;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            role = user.role;
        })
    } else {
        res.cookie("msg", "Nem vagy bejelentkezve!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/");
    }

    const orders = await new ComplexDao().getOrders(username);
    
    return res.render("orders", {
        username: username,
        orders: orders,
        msg: msg,
        role: role
    });
});


router.get("/order/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const orderid = req.params.id;
    const msg = req.cookies.msg;
    var username;
    var couriername;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    if (!username) {
        return res.redirect("/");
    }

    const user = await new UserDao().getUserByUsername(username);
    const order = await new OrderDao().getOrderById(orderid);

    if (!(order.customerusername === username || order.courierusername === username)) {
        return res.redirect("/orders");
    }
    
    const restaurant = await new RestaurantDao().getRestaurant(order.restaurantid);
    const address = await new AddressDao().getAddressById(order.addressid);
    const courier = await new UserDao().getUserByUsername(order.courierusername);
    if (courier) {
        couriername = courier.surname + courier.forename;
    }
    
    const foods = await new ComplexDao().getOrderFoods(order.cartid);
    
    return res.render("order", {
        username: username,
        restaurantname: restaurant.name,
        useraddress: address.zip + " " + address.city + ", " + address.add1 + ", " + address.add2,
        couriername: couriername,
        foods: foods,
        msg: msg,
        role: user.role,
        status: order.status,
        orderid: orderid
    });
});


router.get("/orderfood", async (req, res) => {
    const token = req.cookies.jwt;
    var username;
    //let {addressid} = req.body;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }
    const checkorder = await new OrderDao().getActiveCustomerOrder(username);
    if (checkorder) {
        res.cookie("msg", "Már van folyamatban lévő rendelésed!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/cart");
    }


    const useraddress = await new UserAddressDao().getUserAddresses(username);

    const cart = await new CartDao().getCartByUsername(username);

    const cartfood = await new CartFoodDao().getCartFoods(cart.id);

    if (cartfood.length === 0) {
        res.cookie("msg", "Nincsen semmi a kosaradban!", {httpOnly: true, maxAge: 2000});
        return res.redirect("/cart");
    }

    await new CartDao().updateCartType(cart.id, "order");
    await new CartDao().addCart(username, "cart");

    const food = await new FoodDao().getFood(cartfood[0].foodid);

    await new OrderDao().addOrder(cart.id, food.restaurantid, useraddress[0].addressid, "", username, "inprogress");
    const order = await new OrderDao().getActiveCustomerOrder(username);

    const user = await new UserDao().getUserByUsername(username);
    await new EmailManager().sendEmail(user.email, "Wan rendelés", "Kedves " + user.surname + " " + user.forename + "!\n Köszönjük, a rendelésed!");

    return res.redirect("/order/" + order.id);
});

module.exports = router;