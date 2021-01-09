const hostService = require("../services/hosts");

// Get all hosts
function getAll(req, res) {
  res.status(200).send(hostService.getAllPaged(req.query));
}

// Get a host by id
function getById(req, res) {
  res.status(200).send(hostService.getById(req.params.hostId));
}

// Add an host
function addNewHost(req, res) {
  res.status(200).send(hostService.getById(req.params.hostId));
}

// Updates an host by id
function updateHost(req, res) {
  res.status(200).send(hostService.getById(req.params.hostId));
}

// Remove an host by id
function deleteHost(req, res) {
  res.status(200).send(hostService.getById(req.params.hostId));
}

module.exports = {
  getAll,
  getById,
  addNewHost,
  updateHost,
  deleteHost,
};
