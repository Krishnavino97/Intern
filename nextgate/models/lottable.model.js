const sql = require("../database/db.js");

// constructor 
const LotTable = function(lottable) {
  this.id = lottable.id;
  this.strain = lottable.strain;
  this.exitDate = lottable.exitDate,
  this.expectedWeight = lottable.expectedWeight;
  this.grower = lottable.grower;
  this.batchNo = lottable.batchNo;
  this.status = lottable.status;
  this.type = lottable.type;
  this.seed = lottable.seed;
  this.growingMethod = lottable.growingMethod;
  this.organicNutrition = lottable.organicNutrition;
  this.expectedYield = lottable.expectedYield;
  this.vegDate = lottable.vegDate;
  this.flowerDate = lottable.flowerDate;
  this.harvestDate = lottable.harvestDate;
  this.curingDate = lottable.curingDate;
  this.packageDate = lottable.packageDate;
  this.shippingDate = lottable.shippingDate;
};

module.exports = LotTable;

