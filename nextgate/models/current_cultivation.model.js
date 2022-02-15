const sql = require("../database/db.js");

// constructor 
const CurrentCultivation = function(current_cultivation) {
    this.lotID = current_cultivation.lotID;
    this.strainName = current_cultivation.strainName;
    this.exitDate = current_cultivation.exitDate,
    this.amount = current_cultivation.amount;
    this.grower = current_cultivation.grower;
    this.batchID = current_cultivation.batchID;
    this.status = current_cultivation.status;
  };
  
  
  module.exports = CurrentCultivation;
  