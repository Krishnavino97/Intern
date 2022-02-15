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
  
  CurrentCultivation.create = (newEntry, result) => {
    sql.query("INSERT INTO current_cultivation SET ?", newEntry, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      res.send("created new entry");
      console.log("created new entry: " /*, { id: res.insertId, ...newEntry }*/);
      //result(null, { id: res.insertId, ...newEntry });
    });
  };
  

  module.exports = CurrentCultivation;


  