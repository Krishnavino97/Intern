'use strict';
var dbConn = require('./../../config/db.config');


//Current cultivation object create
var CurrentCultivation = function(currentcultivation){
  this.lotID           = currentcultivation.lotID;
  this.strainName      = currentcultivation.strainName;
  this.exitDate        = currentcultivation.exitDate;
  this.amount          = currentcultivation.amount;
  this.grower          = currentcultivation.grower;
  this.batchID         = currentcultivation.batchID;
  this.status          = currentcultivation.status;
  //this.status          = currentcultivation.status ? currentcultivation.status : 1;
  //this.created_at      = new Date();
  //this.updated_at      = new Date();
};



CurrentCultivation.create = function (newRecord, result) {
    dbConn.query("INSERT INTO current_cultivation set ?", newRecord, function(err, res){
        if(err) {
            console.log ("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};


CurrentCultivation.findById = function (id, result) {
    dbConn.query("SELECT * FROM current_cultivation WHERE lotID = ?", id, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};




CurrentCultivation.findAll = function (result) {
    dbConn.query ("SELECT * FROM current_cultivation", function (err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('current cultivation :', res);
            result(null, res);
        }
    });
};



CurrentCultivation.update = function(id, currentcultivation, result){
dbConn.query("UPDATE current_cultivation SET strainName=?,exitDate=?,amount=?,grower=?,batchID=?,status=? WHERE id = ?", 
[
    currentcultivation.strainName,
    currentcultivation.exitDate,
    currentcultivation.amount,
    currentcultivation.grower,
    currentcultivation.batchID,
    currentcultivation.status, 
    currentcultivation.lotID
], 
function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};



CurrentCultivation.delete = function(id, result){
    dbConn.query("DELETE FROM current_cultivation WHERE id = ?", [id], function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


module.exports= CurrentCultivation;
