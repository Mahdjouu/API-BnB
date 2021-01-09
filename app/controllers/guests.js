const guestService = require("../services/guests");

// Get all guests
function getAll(req, res) {
  res.status(200).send(guestService.getAllPaged(req.query));
}

// Get a guest by id
function getById(req, res) {
  res.status(200).send(guestService.getById(req.params.guestId));
}

// Add an guest
function addNewGuest(req, res) {
  res.status(200).send(guestService.getById(req.params.guestId));
}

// Updates an guest by id
function updateGuest(req, res) {
  res.status(200).send(guestService.getById(req.params.guestId));
}

// Remove an guest by id
function deleteGuest(req, res) {
  res.status(200).send(guestService.getById(req.params.guestId));
}

module.exports = {
  getAll,
  getById,
  addNewGuest,
  updateGuest,
  deleteGuest,
};
