const hostsMock = require("../mocks/hosts.json");
const {
  getPage,
  findItemById,
  ClientError,
  addItem,
  updateItem,
  removeItem,
} = require("../helpers");

// In memory hosts
const hosts = [...hostsMock];

function getAllPaged(queryParams) {
  return getPage(hosts, queryParams);
}

function getById(hostId) {
  const host = findItemById(hosts, hostId);
  if (!host) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown host",
    });
  }
  return host;
}

function addNewHost(newHost) {
  const host = addItem(hosts, newHost);
  return host;
}

function updateHost(hostId, paramHostToUpdate) {
  const host = updateItem(hosts, hostId, paramHostToUpdate);
  if (!host) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown host",
    });
  }
  return host;
}

function deleteHost(hostId) {
  removeItem(hosts, hostId);
}

module.exports = {
  getAllPaged,
  getById,
  addNewHost,
  updateHost,
  deleteHost,
};
