const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const result = {};
    species.forEach((specie) => {
      result[specie.name] = specie.residents.length;
    });
    return result;
  }
  let countSpecies = 0;
  species.forEach((specie) => {
    const sex = specie.residents.filter((desc) => desc.sex === animal.sex);
    if (Object.keys(animal).length === 1 && animal.specie === specie.name) {
      countSpecies = specie.residents.length;
    } else if (animal.specie === specie.name) {
      countSpecies = sex.length;
    }
  });
  return countSpecies;
}
module.exports = countAnimals;
