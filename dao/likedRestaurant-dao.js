const db = require("../config/db");

class LikedRestaurantDao {
    async addLikedRestaurant(username, restaurantid) {
        await db.query("INSERT INTO likedrestaurant (username, restaurantid) VALUES ($1, $2)", [username, restaurantid]).catch(console.log);
        return;
    }

    async getLikedRestaurants(username) {
        let result = await db.query("SELECT * FROM likedrestaurant WHERE username = $1", [username]).catch(console.log);
        return result.rows;
    }

    async getLikedRestaurant(username, restaurantid) {
        let result = await db.query("SELECT * FROM likedrestaurant WHERE username = $1 AND restaurantid = $2", [username, restaurantid]).catch(console.log);
        return result.rows[0];
    }

    async deleteLikedRestaurant(username, restaurantid) {
        await db.query("DELETE FROM likedrestaurant WHERE username = $1 AND restaurantid = $2", [username, restaurantid]).catch(console.log);
        return;
    }
};

module.exports = LikedRestaurantDao;