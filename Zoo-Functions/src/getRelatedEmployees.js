const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

function isManager(id) {
  // seu código aqui
  let result = false;
  employees.forEach((employee) => {
    const empyID = employee.id;
    if (empyID === id && (empyID === stephanieId || empyID === olaId || empyID === burlId)) {
      result = true;
    }
  });
  return result;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const result = [];
    employees.forEach((employee) => {
      const { firstName, lastName } = employee;
      employee.managers.forEach((manager) => {
        if (manager === managerId) {
          result.push(`${firstName} ${lastName}`);
        }
      });
    });
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
