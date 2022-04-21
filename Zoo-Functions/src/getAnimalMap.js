const data = require('../data/zoo_data');

const { species } = data;

const animalsLocal = {};
const ne = [];
const nw = [];
const se = [];
const sw = [];

species.forEach((specie) => {
  if (specie.location === 'NE') {
    ne.push(specie.name);
    animalsLocal[specie.location] = ne;
  } else if (specie.location === 'NW') {
    nw.push(specie.name);
    animalsLocal[specie.location] = nw;
  } else if (specie.location === 'SE') {
    se.push(specie.name);
    animalsLocal[specie.location] = se;
  } else if (specie.location === 'SW') {
    sw.push(specie.name);
    animalsLocal[specie.location] = sw;
  }
});

const animalsName = {};
const animalsNE = [];
const animalsNW = [];
const animalsSE = [];
const animalsSW = [];

species.forEach((specie) => {
  if (specie.location === 'NE') {
    animalsNE.push({ [specie.name]: specie.residents.map((infos) => infos.name) });
    animalsName[specie.location] = animalsNE;
  } else if (specie.location === 'NW') {
    animalsNW.push({ [specie.name]: specie.residents.map((infos) => infos.name) });
    animalsName[specie.location] = animalsNW;
  } else if (specie.location === 'SE') {
    animalsSE.push({ [specie.name]: specie.residents.map((infos) => infos.name) });
    animalsName[specie.location] = animalsSE;
  } else if (specie.location === 'SW') {
    animalsSW.push({ [specie.name]: specie.residents.map((infos) => infos.name) });
    animalsName[specie.location] = animalsSW;
  }
});

const sorted = (array) => {
  array.NE[0].lions.sort();
  array.NE[1].giraffes.sort();
  array.NW[0].tigers.sort();
  array.NW[1].bears.sort();
  array.NW[2].elephants.sort();
  array.SE[0].penguins.sort();
  array.SE[1].otters.sort();
  array.SW[0].frogs.sort();
  array.SW[1].snakes.sort();
  return array;
};

const animalsSex = {};
let anlNE = [];
let anlNW = [];
let anlSE = [];
let anlSW = [];

const nameAnimalsSex = (sex) => {
  species.forEach((specie) => {
    const { residents, name } = specie;
    if (specie.location === 'NE') {
      anlNE.push({ [name]: residents.filter((infos) => infos.sex === sex).map((s) => s.name) });
      animalsSex[specie.location] = anlNE;
    } else if (specie.location === 'NW') {
      anlNW.push({ [name]: residents.filter((infos) => infos.sex === sex).map((s) => s.name) });
      animalsSex[specie.location] = anlNW;
    } else if (specie.location === 'SE') {
      anlSE.push({ [name]: residents.filter((infos) => infos.sex === sex).map((s) => s.name) });
      animalsSex[specie.location] = anlSE;
    } else if (specie.location === 'SW') {
      anlSW.push({ [name]: residents.filter((infos) => infos.sex === sex).map((s) => s.name) });
      animalsSex[specie.location] = anlSW;
    }
  });
  return animalsSex;
};

const reset = () => {
  anlNE = [];
  anlNW = [];
  anlSE = [];
  anlSW = [];
};

function getAnimalMap(options = animalsLocal) {
  if (options.includeNames === true) {
    let result = animalsName;
    if (Object.keys(options).includes('sex')) {
      reset();
      result = nameAnimalsSex(options.sex);
    }
    if (options.sorted === true) {
      result = sorted(result);
    }
    return result;
  }
  return animalsLocal;
}

module.exports = getAnimalMap;
