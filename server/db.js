//connecting database and server

const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "database987",
    host: "sd-database.cbhtm0wsmte2.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "sd_database"
});

module.exports = pool;