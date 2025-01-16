const db = require("../config/db");

class AddressDao {
    async addAddress(city, zip, add1, add2) {
        await db.query("INSERT INTO address (zip, add1, add2, city) VALUES ($1, $2, $3, $4)", [zip, add1, add2, city]).catch(console.log);
        return;
    }

    async getAddressById(id) {
        let result = await db.query("SELECT * FROM address WHERE id = $1", [id]).catch(console.log);
        return result.rows[0];
    }

    async getAddressId(city, zip, add1, add2) {
        let result = await db.query("SELECT * FROM address WHERE city = $1 AND zip = $2 AND add1 = $3 AND add2 = $4", [city, zip, add1, add2]).catch(console.log);
        return result.rows[0];
    }

    async updateAddress(id, zip, add1, add2, city) {
        await db.query("UPDATE address SET zip = $1, add1 = $2, add2 = $3, city = $5 WHERE id = $4", [zip, add1, add2, id, city]).catch(console.log);
        return;
    }

    async deleteAddress(id) {
        await db.query("DELETE FROM address WHERE id = $1", [id]).catch(console.log);
        return;
    }
}

module.exports = AddressDao;