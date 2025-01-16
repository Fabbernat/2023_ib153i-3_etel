const db = require("../config/db");

class UserAddressDao {
    async addUserAddress(username, addressid) {
        await db.query("INSERT INTO useraddress (username, addressid) VALUES ($1, $2)", [username, addressid]).catch(console.log);
        return;
    }

    async getUserAddresses(username) {
        let result = await db.query("SELECT * FROM useraddress WHERE username = $1", [username]).catch(console.log);
        return result.rows;
    }

    async getUserAddressesByAddress(addressid) {
        let result = await db.query("SELECT * FROM useraddress WHERE addressid = $1", [addressid]).catch(console.log);
        return result.rows;
    }

    async deleteUserAddess(username, addressid) {
        await db.query("DELETE FROM useraddress WHERE username = $1 AND addressid = $2", [username, addressid]).catch(console.log);
        return;
    }
};

module.exports = UserAddressDao;