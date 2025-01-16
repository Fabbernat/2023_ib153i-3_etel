const db = require("../config/db");

class UserDao {
    async addUser(username, email, passhash, forename, surname, role) {
        await db.query("INSERT INTO users (username, email, passhash, forename, surname, role) VALUES ($1, $2, $3, $4, $5, $6)", [username, email, passhash, forename, surname, role]).catch(console.log);
        return;
    }

    async getUserByUsername(username) {
        let result = await db.query("SELECT * FROM users WHERE username = $1", [username]).catch(console.log);
        return result.rows[0];
    }

    async getUserByEmail(email) {
        let result = await db.query("SELECT * FROM users WHERE email = $1", [email]).catch(console.log);
        return result.rows[0];
    }

    async updateUserRole(username, role) {
        await db.query("UPDATE users SET role = $1 WHERE username = $2", [role, username]).catch(console.log);
        return;
    }

    async updateUserEmail(username, email) {
        await db.query("UPDATE users SET email = $1 WHERE username = $2", [email, username]).catch(console.log);
        return;
    }

    async updatePassword(username, password) {
        await db.query("UPDATE users SET passhash = $1 WHERE username = $2", [password, username]).catch(console.log);
        return;
    }

    async updateUserFullname(username, forename, surname) {
        await db.query("UPDATE users SET forename = $1, surname = $2 WHERE username = $3", [forename, surname, username]).catch(console.log);
        return;
    }

    async deleteUser(username) {
        await db.query("DELETE FROM users WHERE username = $1", [username]).catch(console.log);
        return;
    }
}

module.exports = UserDao;