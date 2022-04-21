const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  let result = false;
  data.species.forEach((spc) => {
    if (spc.name === animal && spc.residents.every((resident) => resident.age >= age) === true) {
      result = true;
    }
  });
  return result;
}
module.exports = getAnimalsOlderThan;
