const { addAbortListener } = require("events");
const db = require("../config/db");

class ComplexDao {
    async getAvailableOrders(){
        let result = await db.query("SELECT orders.id AS orderid, address1.zip AS userzip, address1.city AS usercity, address1.add1 AS useradd1, address1.add2 AS useradd2, restaurant.name AS restaurantname, users.surname AS usersurname, users.forename AS userforename, address2.zip AS restzip, address2.city AS restcity, address2.add1 AS restadd1, address2.add2 AS restadd2 FROM orders, address AS address1, address AS address2, users, restaurant WHERE orders.addressid = address1.id AND orders.customerusername = users.username AND orders.restaurantid = restaurant.id AND restaurant.addressid = address2.id AND orders.courierusername = ''").catch(console.log);
        return result.rows;
    }

    async getCartFoods(cartid) {
        let result = await db.query("SELECT cartfood.amount, food.name, food.price, food.id FROM cartfood, food WHERE cartfood.foodid = food.id AND cartfood.cartid = $1", [cartid]).catch(console.log);
        return result.rows;
    }

    async getOrders(username) {
        let result = await db.query("SELECT orders.id, restaurant.name FROM orders, restaurant WHERE orders.restaurantid = restaurant.id AND orders.customerusername = $1", [username]).catch(console.log);
        return result.rows;
    }

    async getOrderFoods(cartid) {
        let result = await db.query("SELECT food.name as foodname, food.price, cartfood.amount, cartfood.cartid FROM cartfood, food WHERE cartfood.foodid = food.id AND cartfood.cartid = $1", [cartid]).catch(console.log);
        return result.rows;
    }

    async getFoods(restaurantid) {
        let result = await db.query("SELECT orders.id AS orderid, cartfood.amount, food.name FROM cartfood, food, orders WHERE orders.cartid = cartfood.cartid AND cartfood.foodid = food.id AND orders.restaurantid = $1", [restaurantid]).catch(console.log);
        return result.rows;
    }

    
    async deleteUser(username) {
        await db.query("UPDATE users SET passhash = $1, username = $3 WHERE username = $2", ["0", username, "0"]).catch(console.log);
        const user = await db.query("SELECT * FROM users WHERE username = $1", [username]).catch(console.log);
        if (user.rows[0].role === "ROLE_RESTAURANT") {
            const owner = await db.query("SELECT * FROM owner WHERE username = $1", [username]).catch(console.log);
            await db.query("UPDATE restaurant SET monday = $1, tuesday = $2, wednesday = $3, thursday = $4, friday = $5, saturday = $5, sunday = $6, addressid = $7 WHERE id = $8", ["BEZÁRT", "", "", "", "", "", "", owner.rows[0].restaurantid]).catch(console.log);
        }
    }
}

module.exports = ComplexDao;