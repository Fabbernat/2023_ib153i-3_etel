const db = require("../config/db");

class FoodDao {
    async addFood(restaurantid, name, description, price, tag) {
        await db.query("INSERT INTO food (restaurantid, name, description, price, tag) VALUES ($1, $2, $3, $4, $5)", [restaurantid, name, description, price, tag]).catch(console.log);
        return;
    }

    async getFood(id) {
        let result = await db.query("SELECT * FROM food WHERE id = $1", [id]).catch(console.log);
        return result.rows[0];
    }

    async getFoodsOfRestaurnat(restaurantid) {
        let result = await db.query("SELECT * FROM food WHERE restaurantid = $1", [restaurantid]).catch(console.log);
        return result.rows;
    }

    async getFoodsByTag(tag) {
        let result = await db.query("SELECT * FROM food WHERE tag = $1", [tag]).catch(console.log);
        return result.rows;
    }

    async updateFood(id, name, description, price, tag) {
        await db.query("UPDATE food SET name = $1, description = $2, price = $3, tag = $4 WHERE id = $5", [name, description, price, tag, id]).catch(console.log);
        return;
    }

    async updateFoodPrice(id, price) {
        await db.query("UPDATE food SET price = $1 WHERE id = $2", [price, id]).catch(console.log);
        return;
    }

    async deleteFood(id) {
        await db.query("DELETE FROM food WHERE id = $1", [id]).catch(console.log);
        return;
    }
};

module.exports = FoodDao;