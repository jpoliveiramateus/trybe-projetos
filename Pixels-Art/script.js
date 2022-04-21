function paletteColors(color) {
  const div = document.getElementById('color-palette');
  const divChild = document.createElement('div');
  divChild.className = 'color';
  divChild.style.backgroundColor = color;
  div.appendChild(divChild);
}

function generateColor() {
  const characters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += characters[Math.floor(Math.random() * 16)];
  }
  return color;
}

paletteColors('black');
paletteColors(generateColor());
paletteColors(generateColor());
paletteColors(generateColor());

function createTable(n) {
  const div = document.getElementById('pixel-board');
  for (let i = 1; i <= n; i += 1) {
    const divNew = document.createElement('div');
    divNew.className = 'lines';
    div.appendChild(divNew);
  }
}

function tablePixels(n) {
  createTable(n);
  const divNew = document.querySelectorAll('.lines');
  for (let i = 0; i < divNew.length; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      const divChild = document.createElement('div');
      divChild.className = 'pixel';
      divNew[i].appendChild(divChild);
    }
  }
}
tablePixels(5);

function colorBlackInitial() {
  const colorBlack = document.querySelectorAll('.color')[0];
  colorBlack.classList.add('selected');
}
colorBlackInitial();

function addClass(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  event.target.classList.add('selected');
}
document.querySelectorAll('.color')[0].addEventListener('click', addClass);
document.querySelectorAll('.color')[1].addEventListener('click', addClass);
document.querySelectorAll('.color')[2].addEventListener('click', addClass);
document.querySelectorAll('.color')[3].addEventListener('click', addClass);

function paintPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', () => {
      pixel[i].style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
    });
  }
}
paintPixel();

function clearPixels() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
const button = document.getElementById('clear-board');
button.addEventListener('click', clearPixels);

function remove() {
  const div = document.querySelectorAll('.lines');
  for (let i = 0; i < div.length; i += 1) {
    div[i].remove();
  }
}

function definedPixels() {
  const size = document.getElementById('board-size').value;
  if (size === '') {
    return window.alert('Board inválido!');
  }
  remove();
  if (size < 5) {
    tablePixels(5);
  } else if (size > 30) {
    window.alert('Board inválido! Valor máximo 30.');
    tablePixels(50);
  } else {
    tablePixels(size);
  }
  paintPixel();
}
const buttonVQV = document.getElementById('generate-board');
buttonVQV.addEventListener('click', definedPixels);
