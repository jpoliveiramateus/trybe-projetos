const data = require('../data/zoo_data');

const { employees, species } = data;
const employeesInfo = employees.reduce((acc, value) => {
  const { firstName, lastName, id, responsibleFor } = value;
  acc.push({
    id: `${id}`,
    fullName: `${firstName} ${lastName}`,
    species: responsibleFor.reduce((count, specieID) => {
      species.forEach((specie) => {
        if (specie.id === specieID) count.push(specie.name);
      });
      return count;
    }, []),
    locations: responsibleFor.reduce((count, specieID) => {
      species.forEach((specie) => {
        if (specie.id === specieID) count.push(specie.location);
      });
      return count;
    }, []),
  });
  return acc;
}, []);

function getEmployeesCoverage(obj) {
  // seu código aqui
  if (obj === undefined) return employeesInfo;
  let result;
  if (Object.keys(obj).includes('name')) {
    const [one] = employeesInfo.filter((value) => value.fullName.includes(obj.name));
    result = one;
  }
  if (Object.keys(obj).includes('id')) {
    const [one] = employeesInfo.filter((value) => value.id === obj.id);
    result = one;
  }
  if (result === undefined) throw new Error('Informações inválidas');
  return result;
}
module.exports = getEmployeesCoverage;
