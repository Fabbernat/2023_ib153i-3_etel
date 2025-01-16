const db = require("../config/db");

class CartFoodDao {
    async addCartFood(cartid, foodid, amount) {
        await db.query("INSERT INTO cartfood (cartid, foodid, amount) VALUES ($1, $2, $3)", [cartid, foodid, amount]).catch(console.log);
        return;
    }

    async getCartFoods(cartid) {
        let result = await db.query("SELECT * FROM cartfood WHERE cartid = $1", [cartid]).catch(console.log);
        return result.rows;
    }

    async updateCartFoodAmount(cartid, foodid, amount) {
        await db.query("UPDATE cartfood SET amount = $1 WHERE cartid = $2 AND foodid = $3", [amount, cartid, foodid]).catch(console.log);
        return;
    }

    async deleteCartFood(cartid, foodid) {
        await db.query("DELETE FROM cartfood WHERE cartid = $1 AND foodid = $2", [cartid, foodid]).catch(console.log);
        return;
    }
}

module.exports = CartFoodDao;