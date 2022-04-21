// Desafio 1
function compareTrue(sunny, money) {
  if (sunny && money) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let newPhrase = phrase.split(' ');
  return newPhrase;
}

// Desafio 4
function concatName(names) {
  let firstName = names[0];
  let lastName = names[names.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(win, ties) {
  let points = win * 3 + ties;
  return points;
}

// Encontrar o maior número dentro de uma array.
function bigNumber(numbers) {
  let num = numbers[0];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > num) {
      num = numbers[i];
    }
  }
  return num;
}
// Desafio 6
function highestCount(numbers) {
  let counter = 0;

  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === bigNumber(numbers)) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distanceCat1 === distanceCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else {
    result = 'cat2';
  }
  return result;
}

function percorrerLoop(loop, i, result) {
  if (loop[i] % 5 === 0) {
    result.push('buzz');
  } else if (loop[i] % 3 === 0) {
    result.push('fizz');
  } else {
    result.push('bug!');
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 15 === 0) {
      result.push('fizzBuzz');
    } else {
      percorrerLoop(numbers, i, result);
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let a = phrase.replace(/a/g, '1');
  let e = a.replace(/e/g, '2');
  let i = e.replace(/i/g, '3');
  let o = i.replace(/o/g, '4');
  let u = o.replace(/u/g, '5');
  let result = u;
  return result;
}
function decode(phrase) {
  let a1 = phrase.replace(/1/g, 'a');
  let e2 = a1.replace(/2/g, 'e');
  let i3 = e2.replace(/3/g, 'i');
  let o4 = i3.replace(/4/g, 'o');
  let u5 = o4.replace(/5/g, 'u');
  let result = u5;
  return result;
}

// Desafio 10
function techList(tech, names) {
  let result = [];
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let newTech = [];
  newTech = tech.sort();
  for (let i = 0; i < newTech.length; i += 1) {
    result.push({ tech: newTech[i], name: names });
  }
  return result;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
