const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  let result = {};
  data.employees.forEach((info) => {
    if (info.id === id) {
      result = species.find((specie) => specie.id === info.responsibleFor[0]);
      console.log(result);
    }
  });
  const animalBiggerAge = result.residents.reduce((acc, age) => ((acc.age > age.age) ? acc : age));
  const { name, sex, age } = animalBiggerAge;
  return [name, sex, age];
}
module.exports = getOldestFromFirstSpecies;
