const apartmentService = require("../services/apartments");

// Get all apartments
function getAll(req, res) {
  res.status(200).send(apartmentService.getAllPaged(req.query));
}

// Get an apartment by id
function getById(req, res) {
  res.status(200).send(apartmentService.getById(req.params.apartmentId));
}

// Add an apartment
function addNewApartment(req, res) {
  res.status(200).send(apartmentService.getById(req.params.apartmentId));
}

// Updates an apartment by id
function updateApartment(req, res) {
  res.status(200).send(apartmentService.getById(req.params.apartmentId));
}

// Remove an apartment by id
function deleteApartment(req, res) {
  res.status(200).send(apartmentService.getById(req.params.apartmentId));
}

module.exports = {
  getAll,
  getById,
  addNewApartment,
  updateApartment,
  deleteApartment,
};
