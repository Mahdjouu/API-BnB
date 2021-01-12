//ajouter la verification d'une ville via cityId si n'existe pas erreur

const rentalsMock = require("../mocks/rentals.json");
const {
  getPage,
  findItemById,
  ClientError,
  addItem,
  updateItem,
  removeItem,
} = require("../helpers");

// In memory rentals
const rentals = [...rentalsMock];

function getAllPaged(queryParams) {
  return getPage(rentals, queryParams);
}

function getById(rentalId) {
  const rental = findItemById(rentals, rentalId);
  if (!rental) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown rental",
    });
  }
  return rental;
}

function addNewRental(newRental) {
  const rental = addItem(rentals, newRental);
  return rental;
}

function updateRental(rentalId, paramRentalToUpdate) {
  const rental = updateItem(rentals, rentalId, paramRentalToUpdate);
  if (!rental) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown rental",
    });
  }
  return rental;
}

function deleteRental(rentalId) {
  removeItem(rentals, rentalId);
}

module.exports = {
  getAllPaged,
  getById,
  addNewRental,
  updateRental,
  deleteRental,
};
