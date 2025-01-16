const db = require("../config/db");

class OwnerDao {
    async addOwner(username, restaurantid) {
        await db.query("INSERT INTO owner (username, restaurantid) VALUES ($1, $2)", [username, restaurantid]).catch(console.log);
    }

    async getOwner(username) {
        let result = await db.query("SELECT * FROM owner WHERE username = $1", [username]).catch(console.log);
        return result.rows[0];
    }

    async deleteOwner(username, restaurantid) {
        await db.query("DELETE FROM owner WHERE username = $1 AND restaurantid = $2", [username, restaurantid]).catch(console.log);
    }
}

module.exports = OwnerDao;