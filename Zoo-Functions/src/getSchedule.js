const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const hour = data.hours;

const animalDay = (date) => {
  const result = [];
  data.species.forEach((value) => {
    if (value.availability.includes(date)) {
      result.push(value.name);
    }
  });
  return result;
};

const obj = {
  Tuesday: {
    officeHour: `Open from ${hour.Tuesday.open}am until ${hour.Tuesday.close}pm`,
    exhibition: animalDay('Tuesday'),
  },
  Wednesday: {
    officeHour: `Open from ${hour.Wednesday.open}am until ${hour.Wednesday.close}pm`,
    exhibition: animalDay('Wednesday'),
  },
  Thursday: {
    officeHour: `Open from ${hour.Thursday.open}am until ${hour.Thursday.close}pm`,
    exhibition: animalDay('Thursday'),
  },
  Friday: {
    officeHour: `Open from ${hour.Friday.open}am until ${hour.Friday.close}pm`,
    exhibition: animalDay('Friday'),
  },
  Saturday: {
    officeHour: `Open from ${hour.Saturday.open}am until ${hour.Saturday.close}pm`,
    exhibition: animalDay('Saturday'),
  },
  Sunday: {
    officeHour: `Open from ${hour.Sunday.open}am until ${hour.Sunday.close}pm`,
    exhibition: animalDay('Sunday'),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

const date = (day) => ({ [day]: obj[day] });
const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = [];
species.forEach((specie) => animals.push(specie.name));
const dateAnimal = (animal) => {
  const result = species.filter((specie) => specie.name === animal);
  return result[0].availability;
};

const checkResult = (result) => {
  if (result === undefined) return obj;
  return result;
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) return obj;
  let result;
  days.forEach((day) => {
    if (scheduleTarget.includes(day)) result = date(scheduleTarget);
  });
  animals.forEach((animal) => {
    if (scheduleTarget.includes(animal)) result = dateAnimal(animal);
  });
  return checkResult(result);
}
console.log(getSchedule('Tuesday'));
module.exports = getSchedule;
