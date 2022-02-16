'use strict';
const LotTable = require('../models/lottable.model');



exports.findAll = function(req, res) {
LotTable.findAll(function(err, lottable) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', lottable);
  res.send(lottable);
});
};



exports.create = function(req, res) {
const new_record = new LotTable(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
LotTable.create(new_record, function(err, lottable) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Record added successfully!",data:lottable});
});
}
};



exports.findById = function(req, res) {
LotTable.findById(req.params.id, function(err, lottable) {
  if (err)
  res.send(err);
  res.json(lottable);
});
};



exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    LotTable.update(req.params.id, new LotTable(req.body), function(err, lottable) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Record successfully updated' });
});
}
};



exports.delete = function(req, res) {
LotTable.delete( req.params.id, function(err, lottable) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Record successfully deleted' });
});
};
 