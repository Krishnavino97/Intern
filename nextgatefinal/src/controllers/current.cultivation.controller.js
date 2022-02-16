'use strict';
const CurrentCultivation = require('../models/current.cultivation.model');



exports.findAll = function(req, res) {
CurrentCultivation.findAll(function(err, currentcultivation) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', currentcultivation);
  res.send(currentcultivation);
});
};



exports.create = function(req, res) {
const new_record = new CurrentCultivation(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
CurrentCultivation.create(new_record, function(err, currentcultivation) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Record added successfully!",data:currentcultivation});
});
}
};



exports.findById = function(req, res) {
CurrentCultivation.findById(req.params.id, function(err, currentcultivation) {
  if (err)
  res.send(err);
  res.json(currentcultivation);
});
};



exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    CurrentCultivation.update(req.params.id, new CurrentCultivation(req.body), function(err, currentcultivation) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Record successfully updated' });
});
}
};



exports.delete = function(req, res) {
CurrentCultivation.delete( req.params.id, function(err, currentcultivation) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Record successfully deleted' });
});
};
 