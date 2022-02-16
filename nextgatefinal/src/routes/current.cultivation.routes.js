const express = require('express');
const router = express.Router();
const CurrentCultivationController =   require('../controllers/current.cultivation.controller');



// Retrieve all records
router.get('/', CurrentCultivationController.findAll);

// Create a new record
router.post('/', CurrentCultivationController.create);

// Retrieve a single record with id
router.get('/:id', CurrentCultivationController.findById);

// Update a record with id
router.put('/:id', CurrentCultivationController.update);

// Delete a record with id
router.delete('/:id', CurrentCultivationController.delete);


module.exports = router;

