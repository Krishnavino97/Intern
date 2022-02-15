const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json);


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



app.listen(3000, ()=>console.log('Express server is running at port no 3000'));

//retrieve all current_cultivation
app.get('/viewall', (req, res)=>{
    mysqlConnection.query('SELECT * FROM current_cultivation', function (err, rows, fields){
        if(!err){
            //console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});


//retrieve all  _ lottable
app.get('/viewlot', (req, res)=>{
    mysqlConnection.query('SELECT * FROM lottable', function (err, rows, fields){
        if(!err){
            //console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});


//retrieve one current_cultivation
app.get('/viewselected/:id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM current_cultivation WHERE lotID = ?', [req.params.id] , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});


//retrieve one _ lottable
app.get('/viewselectedlot/:id', (req, res)=>{
    mysqlConnection.query('SELECT * FROM lottable WHERE id = ?', [req.params.id] , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send(rows);
        }
        else{
            console.log(err);
        }
    })
});


//delete  current_cultivation
app.delete('/delete/:id', (req, res)=>{
    mysqlConnection.query('DELETE FROM current_cultivation WHERE lotID = ?', [req.params.id] , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Deleted Successfully!');
        }
        else{
            console.log(err);
        }
    })
});



//delete from lottable
app.delete('/deletelot/:id', (req, res)=>{
    mysqlConnection.query('DELETE FROM lottable WHERE id = ?', [req.params.id] , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Deleted Successfully!');
        }
        else{
            console.log(err);
        }
    })
});


//update  current_cultivation
app.post('/update/:id', (req, res)=>{
    var sql = "UPDATE current_cultivation SET (strainName = ? , exitDate = ?, amount = ?, grower = ?, batchID = ?, status = ? WHERE lotID = ?";
    mysqlConnection.query(sql, [strainName, exitDate, amount, grower, batchID, status, req.params.id] , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Updated Successfully!');
        }
        else{
            console.log(err);
        }
    })  
});



//update into lottable
app.post('/updatelot/:id', (req, res)=>{
    var sql = "UPDATE lottable SET (strain = ? , exitDate = ?, expectedWeight = ?, grower = ?, batchNo = ?, status = ?, type = ?, seed = ?, growingMethod = ?, organicNutrition = ?, expectedYield = ?, vegDate = ?, flowerDate = ?, harvestDate = ?, curingDate = ?, packageDate = ?, shippingDate = ? WHERE id = ?";
    mysqlConnection.query(sql, [strain, exitDate, expectedWeight, grower, batchNo, status, type, seed, growingMethod, organicNutrition, expectedYield, vegDate, flowerDate, harvestDate, curingDate, packageDate, shippingDate, req.params.id],
        (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Updated Successfully!');
        }
        else{
            console.log(err);
        }
    })  
});


//insert  current_cultivation
app.post('/insert', (req, res)=>{
    var sql = "INSERT INTO current_cultivation ( strainName, exitDate, amount, grower, batchID, status ) VALUES ( ?, ?, ?, ?, ?, ? )";
    mysqlConnection.query(sql , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Created row Successfully!');
        }
        else{
            console.log(err);
        }
    })
});



//insert into lottable
app.post('/insertlot', (req, res)=>{
    var sql = "INSERT INTO lottable ( strain, exitDate, expectedWeight, grower, batchNo, status, type, seed, growingMethod, organicNutrition, expectedYield, vegDate, flowerDate, harvestDate, curingDate, packageDate, shippingDate ) \
    VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    mysqlConnection.query(sql , (err, rows, fields)=>{
        if(!err){
            //console.log(rows);
            res.send('Created row Successfully!');
        }
        else{
            console.log(err);
        }
    })
});
