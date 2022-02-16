const express = require('express');
const router = express.Router();
const LotTableController =   require('../controllers/lottable.controller');



// Retrieve all records
router.get('/', LotTableController.findAll);

// Create a new record
router.post('/', LotTableController.create);

// Retrieve a single record with id
router.get('/:id', LotTableController.findById);

// Update a record with id
router.put('/:id', LotTableController.update);

// Delete a record with id
router.delete('/:id', LotTableController.delete);


module.exports = router;

