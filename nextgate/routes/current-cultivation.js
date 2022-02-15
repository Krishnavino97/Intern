var express = require('express');
var router = express.Router();
const users = require("../controllers/users.controller");

  // Create a new Booking
  router.post("/", users.create);

  // Retrieve all users
  router.get("/", users.findAll);

  // Retrieve a single user with userId
  router.get("/:userId", users.findOne);

  // Update a Customer with bookingId
  router.put("/:userId", users.update);

  // Delete a Customer with bookingId
  router.delete("/:userId", users.delete);

  // Create a new Customer
  router.delete("/", users.deleteAll);

module.exports = router;
