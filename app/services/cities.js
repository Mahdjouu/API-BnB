const citiesMock = require("../mocks/cities.json");
const { getPage, findItemById, ClientError } = require("../helpers");

// In memory cities
const cities = [...citiesMock];

function getAllPaged(queryParams) {
  return getPage(cities, queryParams);
}

function getById(cityId) {
  const city = findItemById(cities, cityId);
  if (!city) {
    throw new ClientError({
      statusCode: 404,
      code: "CLI_123",
      label: "Unknown city",
    });
  }
  return city;
}

module.exports = {
  getAllPaged,
  getById,
};
