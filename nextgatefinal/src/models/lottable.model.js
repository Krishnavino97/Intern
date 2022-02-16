'use strict';
var dbConn = require('./../../config/db.config');


//Employee object create
var LotTable = function(lottable){
  this.id                = lottable.id;
  this.strain            = lottable.strain;
  this.exitDate          = lottable.exitDate;
  this.expectedWeight    = lottable.expectedWeight;
  this.grower            = lottable.grower;
  this.batchNo           = lottable.batchNo;
  this.status            = lottable.status;
  this.type              = lottable.type;
  this.seed              = lottable.seed;
  this.growingMethod     = lottable.growingMethod;
  this.organicNutrition  = lottable.organicNutrition;
  this.expectedYield     = lottable.expectedYield;
  this.vegDate           = lottable.vegDate;
  this.flowerDate        = lottable.flowerDate;
  this.harvestDate       = lottable.harvestDate;
  this.curingDate        = lottable.curingDate;
  this.packageDate       = lottable.packageDate;
  this.shippingDate      = lottable.shippingDate;
  //this.status          = currentcultivation.status ? currentcultivation.status : 1;
  //this.created_at      = new Date();
  //this.updated_at      = new Date();
};



LotTable.create = function (newRecord, result) {
    dbConn.query("INSERT INTO lottable set ?", newRecord, function(err, res){
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


LotTable.findById = function (id, result) {
    dbConn.query("SELECT * FROM lottable WHERE id = ?", id, function(err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};




LotTable.findAll = function (result) {
    dbConn.query ("SELECT * FROM lottable", function (err,res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('lot  :', res);
            result(null, res);
        }
    });
};



LotTable.update = function(id, lottable, result){
dbConn.query("UPDATE lottable SET strain=?, exitDate=?, expectedWeight=?, grower=?, batchNo=?, status=?, type=?, seed=?, growingMethod=?, organicNutrition=?, expectedYield=?, vegDate=?, flowerDate=?, harvestDate=?, curingDate=?, packageDate=?, shippingDate=?  WHERE id = ?", 
[
    lottable.strain,
    lottable.exitDate,
    lottable.expectedWeight,
    lottable.grower,
    lottable.batchNo,
    lottable.status, 
    lottable.type,
    lottable.seed,
    lottable.growingMethod,
    lottable.organicNutrition,
    lottable.expectedYield, 
    lottable.vegDate,
    lottable.flowerDate,
    lottable.harvestDate,
    lottable.curingDate,
    lottable.packageDate,
    lottable.shippingDate,
    lottable.id
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



LotTable.delete = function(id, result){
    dbConn.query("DELETE FROM lottable WHERE id = ?", [id], function (err, res){
        if(err){
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};


module.exports= LotTable;
