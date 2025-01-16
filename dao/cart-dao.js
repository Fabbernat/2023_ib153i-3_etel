const db = require("../config/db");

class CartDao {
    async addCart(username, type) {
        await db.query("INSERT INTO cart (username, type) VALUES ($1, $2) ", [username, type]).catch(console.log);
        return;
    }

    async getCartByUsername(username) {
        let result = await db.query("SELECT * FROM cart WHERE username = $1", [username]).catch(console.log);
        return result.rows[0];
    }

    async getCartById(id) {
        let result = await db.query("SELECT * FROM cart WHERE id = $1", [id]).catch(console.log);
        return result.rows[0];
    }

    async getCurrentCart(username) {
        let result = await db.query("SELECT * FROM cart WHERE username = $1 AND type = 'cart'", [username]);
        return result.rows[0];
    }

    async updateCartType(id, type) {
        await db.query("UPDATE cart SET type = $1 WHERE id = $2", [type, id]).catch(console.log);
        return;
    }

    async deleteCart(username) {
        await db.query("DELETE FROM cart WHERE username = $1", [username]).catch(console.log);
        return;
    }
}

module.exports = CartDao;