const res = require("express/lib/response");
const CurrentCultivation = require("../models/current_cultivation.model");

// Create a current cultivation entry
const currentcultivation = new CurrentCultivation({
    lotID : req.body.lotID,
    strainName : req.body.strainName,
    exitDate: req.body.exitDate,
    amount : req.body.amount,
    grower : req.body.grower,
    batchID : req.body.batchID,
    status : req.body.status,
  });

  // save current cultivation in the database
  CurrentCultivation.create(currentcultivation, (err, data) => {
      if(err){
          res.status(500).send({
              message:err.message || "Error occured while entry"
          })
      }
      else{
          res.send(data);
      }
  });

  