const mysql = require('mysql');


var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nextgate',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection succeed!');
    }
    else{
        console.log('DB connection Failed \n Error:' + JSON.stringify(err,  undefined, 2));
    }
});

module.exports = mysqlConnection;

