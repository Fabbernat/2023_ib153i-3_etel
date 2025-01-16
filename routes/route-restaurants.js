const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const {secret, userAuth} = require("../config/auth");
const EmailManager = require("../service/email-manager");
const CartFoodDao = require("../dao/cartFood-dao");
const FoodDao = require("../dao/food-dao");
const OrderDao = require("../dao/order-dao");
const RestaurantDao = require("../dao/restaurant-dao");
const UserDao = require("../dao/user-dao");
const OwnerDao = require("../dao/owner-dao");
const ComplexDao = require("../dao/complex-dao");

router.get("/myrestaurant", async (req, res) => {
    const token = req.cookies.jwt;
    var username;
    var role;
    const msg = req.cookies.msg;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            role = user.role;
            if (user.role !== "ROLE_RESTAURANT") {
                return res.redirect("/");
            }
        })
    }

    if (!username) {
        return res.redirect("/");
    }

    const restaurant = await new OwnerDao().getOwner(username);
    const foods = await new FoodDao().getFoodsOfRestaurnat(restaurant.restaurantid);
    const myrestaurant = await new RestaurantDao().getRestaurant(restaurant.restaurantid);


    return res.render("myrestaurant", {
        username: username,
        restaurant: myrestaurant,
        foods: foods,
        msg: msg,
        role: role
    });
});


router.post("/addfood", async (req, res) => {
    const token = req.cookies.jwt;
    var username;
    let {newFoodName} = req.body;
    let {newFoodDescription} = req.body;
    let {newFoodPrice} = req.body;
    let {newFoodTags} = req.body;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const owner = await new OwnerDao().getOwner(username);
    await new FoodDao().addFood(owner.restaurantid, newFoodName, newFoodDescription, newFoodPrice, newFoodTags);

    return res.redirect("/myrestaurant");
});


router.post("/updatefood/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const foodid = req.params.id;
    var username;
    let {foodName} = req.body;
    let {foodDescription} = req.body;
    let {foodPrice} = req.body;
    let {foodTags} = req.body;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new FoodDao().updateFood(foodid, foodName, foodDescription, foodPrice, foodTags);

    return res.redirect("/myrestaurant");
});


router.get("/deletefood/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const foodid = req.params.id;
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    const restaurant = await new UserDao().getUserByUsername(username);
    if (restaurant.role !== "ROLE_RESTAURANT") {
        return res.redirect("/");
    }

    await new FoodDao().deleteFood(foodid);

    return res.redirect("/myrestaurant");
});


router.post("/changeopening", async (req, res) => {
    const token = req.cookies.jwt;
    var username;
    let {mon} = req.body;
    let {tue} = req.body;
    let {wed} = req.body;
    let {thu} = req.body;
    let {fri} = req.body;
    let {sat} = req.body;
    let {sun} = req.body;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    if (!mon) { mon = "Zárva"; }
    if (!tue) { tue = "Zárva"; }
    if (!wed) { wed = "Zárva"; }
    if (!thu) { thu = "Zárva"; }
    if (!fri) { fri = "Zárva"; }
    if (!sat) { sat = "Zárva"; }
    if (!sun) { sun = "Zárva"; }

    const owner = await new OwnerDao().getOwner(username);

    await new RestaurantDao().updateRestaurantMonday(owner.restaurantid, mon);
    await new RestaurantDao().updateRestaurantTuesday(owner.restaurantid, tue);
    await new RestaurantDao().updateRestaurantWednesday(owner.restaurantid, wed);
    await new RestaurantDao().updateRestaurantThursday(owner.restaurantid, thu);
    await new RestaurantDao().updateRestaurantFriday(owner.restaurantid, fri);
    await new RestaurantDao().updateRestaurantSaturday(owner.restaurantid, sat);
    await new RestaurantDao().updateRestaurantSunday(owner.restaurantid, sun);

    return res.redirect("/myrestaurant");
});


router.get("/myorders", async (req, res) => {
    const token = req.cookies.jwt;
    const msg = req.cookies.msg;
    var username;
    var role;

    if (token) {
        jwt.verify(token, secret, async (err, decodedToken) => {
            username = decodedToken.username;
            const user = await new UserDao().getUserByUsername(username);
            role = user.role;
            if (user.role !== "ROLE_RESTAURANT") {
                res.redirect("/");
            }
        })
    }

    if (!username) {
        return res.redirect("/");
    }


    const owner = await new OwnerDao().getOwner(username);
    const restaurant = await new RestaurantDao().getRestaurant(owner.restaurantid);
    const orders = await new OrderDao().getOrdersByRestaurant(restaurant.id);
    const foods = await new ComplexDao().getFoods(restaurant.id);

    return res.render("myorders", {
        username: username,
        msg: msg,
        restaurant: restaurant.name,
        orders: orders,
        foods: foods,
        role: role
    });
});


router.post("/changeorder/:id", async (req, res) => {
    const token = req.cookies.jwt;
    const orderid = req.params.id;
    let {status} = req.body;
    
    var username;

    if (token) {
        jwt.verify(token, secret, (err, decodedToken) => {
            username = decodedToken.username;
        })
    }

    await new OrderDao().updateOrderStatus(orderid, status);

    return res.redirect("/myorders");
}); 

module.exports = router;