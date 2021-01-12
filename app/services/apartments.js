//ajouter la verification d'une ville via cityId si n'existe pas erreur

const apartmentsMock = require("../mocks/apartments.json");
const {
  getPage,
  findItemById,
  ClientError,
  addItem,
  updateItem,
  removeItem,
} = require("../helpers");

// In memory apartments
const apartments = [...apartmentsMock];

function getAllPaged(queryParams) {
  return getPage(apartments, queryParams);
}

function getById(apartmentId) {
  const apartment = findItemById(apartments, apartmentId);
  if (!apartment) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown apartment",
    });
  }
  return apartment;
}

function addNewApartment(newApartment) {
  const apartment = addItem(apartments, newApartment);
  return apartment;
}

function updateApartment(apartmentId, paramApartmentToUpdate) {
  const apartment = updateItem(apartments, apartmentId, paramApartmentToUpdate);
  if (!apartment) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown apartment",
    });
  }
  return apartment;
}

function deleteApartment(apartmentId) {
  removeItem(apartments, apartmentId);
}

module.exports = {
  getAllPaged,
  getById,
  addNewApartment,
  updateApartment,
  deleteApartment,
};
