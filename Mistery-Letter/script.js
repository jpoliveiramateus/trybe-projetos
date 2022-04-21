const buttonCreate = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const textC = document.getElementById('carta-texto');
const contador = document.getElementById('carta-contador');

const group1 = ['newspaper', 'magazine1', 'magazine2'];
const group2 = ['medium', 'big', 'reallybig'];
const group3 = ['rotateleft', 'rotateright'];
const group4 = ['skewleft', 'skewright'];

function randomClass() {
  const random1 = group1[Math.floor(Math.random() * group1.length)];
  const random2 = group2[Math.floor(Math.random() * group2.length)];
  const random3 = group3[Math.floor(Math.random() * group3.length)];
  const random4 = group4[Math.floor(Math.random() * group4.length)];
  return `${random1} ${random2} ${random3} ${random4}`;
}

buttonCreate.addEventListener('click', () => {
  const spanClear = document.querySelectorAll('span');
  for (let i = 0; i < spanClear.length; i += 1) {
    paragraph.removeChild(spanClear[i]);
  }
  paragraph.innerHTML = '';
  if (textC.value.trim() === '') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    const index = textC.value.split(' ');
    for (let i = 0; i < index.length; i += 1) {
      const span = document.createElement('span');
      span.className = randomClass();
      span.innerHTML = index[i];
      paragraph.appendChild(span);
    }
  }
});

buttonCreate.addEventListener('click', () => {
  const phrases = document.querySelectorAll('span');
  for (let i = 0; i < phrases.length; i += 1) {
    phrases[i].addEventListener('click', () => {
      phrases[i].className = randomClass();
    });
    contador.innerHTML = phrases.length;
  }
});
