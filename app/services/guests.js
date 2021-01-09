const guestsMock = require("../mocks/guests.json");
const {
  getPage,
  findItemById,
  ClientError,
  addItem,
  updateItem,
  removeItem,
} = require("../helpers");

// In memory guest
const guests = [...guestsMock];

function getAllPaged(queryParams) {
  return getPage(guests, queryParams);
}

function getById(guestId) {
  const guest = findItemById(guests, guestId);
  if (!guest) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown guest",
    });
  }
  return guest;
}

function addNewGuest(newGuest) {
  const guest = addItem(guests, newGuest);
  return guest;
}

function updateGuest(guestId, paramGuestToUpdate) {
  const guest = updateItem(guests, guestId, paramGuestToUpdate);
  if (!guest) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown guest",
    });
  }
  return guest;
}

function deleteGuest(guestId) {
  removeItem(guests, guestId);
}

module.exports = {
  getAllPaged,
  getById,
  addNewGuest,
  updateGuest,
  deleteGuest,
};
