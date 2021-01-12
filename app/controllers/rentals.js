const rentalService = require("../services/rentals");

// Get all rentals
function getAll(req, res) {
  res.status(200).send(rentalService.getAllPaged(req.query));
}

// Get a rental by id
function getById(req, res) {
  res.status(200).send(rentalService.getById(req.params.rentalId));
}

// Add a rental
function addNewRental(req, res) {
  res.status(200).send(rentalService.getById(req.params.rentalId));
}

// Updates a rental by id
function updateRental(req, res) {
  res.status(200).send(rentalService.getById(req.params.rentalId));
}

// Remove a rental by id
function deleteRental(req, res) {
  res.status(200).send(rentalService.getById(req.params.rentalId));
}

module.exports = {
  getAll,
  getById,
  addNewRental,
  updateRental,
  deleteRental,
};
