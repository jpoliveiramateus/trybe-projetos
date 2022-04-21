function auxGenerate(phoneNumber, i) {
  let count = 0;
  for (let j = 0; j < phoneNumber.length; j += 1) {
    if (phoneNumber[j] === phoneNumber[i]) {
      count += 1;
    }
  }
  return count;
}

function x(phoneNumber, i) {
  if (phoneNumber[i] < 0 || phoneNumber[i] > 9) {
    return true;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < phoneNumber.length; i += 1) {
    if (x(phoneNumber, i) || auxGenerate(phoneNumber, i) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumberNewOne = `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}`;
  let phoneNumberNewTwo = `${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-`;
  let phoneNumberNewThree = `${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  return phoneNumberNewOne + phoneNumberNewTwo + phoneNumberNewThree;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  if (lineA < (lineB + lineC) && lineB < (lineA + lineC) && lineC < (lineA + lineB)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(phrase) {
  let r = /\d+/g;
  let result = phrase.match(r);
  let resultConvert = [];
  for (let i = 0; i < result.length; i += 1) {
    resultConvert.push(parseInt(result[i], 0));
  }
  let resultNew = 0;
  for (let j = 0; j < resultConvert.length; j += 1) {
    resultNew += resultConvert[j];
  }
  let resultEnd = '';
  if (resultNew > 1) {
    resultEnd = `${resultNew} copos de água`;
  } else {
    resultEnd = `${resultNew} copo de água`;
  }
  return resultEnd;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
