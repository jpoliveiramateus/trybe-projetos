const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = [];
  ids.forEach((id) => {
    data.species.forEach((animal) => {
      if (animal.id === id) {
        result.push(animal);
      }
    });
  });
  return result;
}
module.exports = getSpeciesByIds;
