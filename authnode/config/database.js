const { createPool } = require("mysql");
// importing createPool

const pool = createPool({
   /* port:3306,
    host:"localhost",
    user:"root",
    password:"",
    database:"auth",
    connectionLimit:10 //maximum connections creatable in a pool
    */

    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.MYSQL_DB,
    connectionLimit:10
});

module.exports = pool; //pool advantage - reuse the connection

//install dotenv // keep all info into env vaiable

