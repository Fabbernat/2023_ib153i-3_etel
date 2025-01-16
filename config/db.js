const path = require("path");
const dotenv = require("dotenv");
dotenv.config({path: __dirname+"./../.env"});
const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DATABASEUSER,
    host: process.env.DATABASEHOST,
    database: process.env.DATABASE,
    password: process.env.DATABASEPASSWORD,
    port: process.env.DATABASEPORT,
});

module.exports = pool;