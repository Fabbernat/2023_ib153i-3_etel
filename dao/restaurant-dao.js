const db = require("../config/db");

class RestaurantDao {
    async addRestaurant(name, addressid, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        await db.query("INSERT INTO restaurant (name, addressid, monday, tuesday, wednesday, thursday, friday, saturday, sunday) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)", [name, addressid, monday, tuesday, wednesday, thursday, friday, saturday, sunday]).catch(console.log);
        return;
    }

    async getRestaurantId(name, addressid, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
        let result = await db.query("SELECT * FROM restaurant WHERE name = $1 AND addressid = $2 AND monday = $3 AND tuesday = $4 AND wednesday = $5 AND thursday = $6 AND friday = $7 AND saturday = $8 AND sunday = $9", [name, addressid, monday, tuesday, wednesday, thursday, friday, saturday, sunday]).catch(console.log);
        return result.rows[0];
    }

    async getRestaurant(id) {
        let result = await db.query("SELECT * FROM restaurant WHERE id = $1", [id]).catch(console.log);
        return result.rows[0];
    }

    async getAllRestaurants() {
        let result = await db.query("SELECT * FROM restaurant", []).catch(console.log);
        return result.rows;
    }

    async updateRestaurant(id, name, addressid) {
        await db.query("UPDATE restaurant SET name = $1, addressid = $2 WHERE id = $3", [name, addressid, id]).catch(console.log);
        return;
    }

    async updateRestaurantMonday(id, monday) {
        await db.query("UPDATE restaurant SET monday = $1 WHERE id = $2", [monday, id]).catch(console.log);
        return;
    }

    async updateRestaurantTuesday(id, tuesday) {
        await db.query("UPDATE restaurant SET tuesday = $1 WHERE id = $2", [tuesday, id]).catch(console.log);
        return;
    }

    async updateRestaurantWednesday(id, wednesday) {
        await db.query("UPDATE restaurant SET wednesday = $1 WHERE id = $2", [wednesday, id]).catch(console.log);
        return;
    }

    async updateRestaurantThursday(id, thursday) {
        await db.query("UPDATE restaurant SET thursday = $1 WHERE id = $2", [thursday, id]).catch(console.log);
        return;
    }

    async updateRestaurantFriday(id, friday) {
        await db.query("UPDATE restaurant SET friday = $1 WHERE id = $2", [friday, id]).catch(console.log);
        return;
    }

    async updateRestaurantSaturday(id, saturday) {
        await db.query("UPDATE restaurant SET saturday = $1 WHERE id = $2", [saturday, id]).catch(console.log);
        return;
    }

    async updateRestaurantSunday(id, sunday) {
        await db.query("UPDATE restaurant SET sunday = $1 WHERE id = $2", [sunday, id]).catch(console.log);
        return;
    }

    async deleteRestaurant(id) {
        await db.query("DELETE FROM restaurant WHERE id = $1", [id]).catch(console.log);
        return;
    }
}

module.exports = RestaurantDao;