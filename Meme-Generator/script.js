const text = document.getElementById('text-input');
const divText = document.getElementById('meme-text');
function addText() {
  divText.innerHTML = text.value;
}
text.addEventListener('input', addText);

const container = document.getElementById('meme-image-container');
const divImage = document.getElementById('meme-image');
const buttonInsert = document.getElementById('meme-insert');
function addImage() {
  const url = URL.createObjectURL(buttonInsert.files[0]);
  divImage.src = url;
  container.appendChild(divImage);
}
buttonInsert.addEventListener('input', addImage);

container.classList.add('black');

function buttonFire() {
  container.className = 'fire';
}
const fire = document.getElementById('fire');
fire.addEventListener('click', buttonFire);

function buttonWater() {
  container.className = 'water';
}
const water = document.getElementById('water');
water.addEventListener('click', buttonWater);

function buttonEarth() {
  container.className = 'earth';
}
const earth = document.getElementById('earth');
earth.addEventListener('click', buttonEarth);

const buttonMeme1 = document.getElementById('meme-1');
function addMeme() {
  divImage.src = buttonMeme1.src;
}
buttonMeme1.addEventListener('click', addMeme);

const buttonMeme2 = document.getElementById('meme-2');
function addMeme2() {
  divImage.src = buttonMeme2.src;
}
buttonMeme2.addEventListener('click', addMeme2);

const buttonMeme3 = document.getElementById('meme-3');
function addMeme3() {
  divImage.src = buttonMeme3.src;
}
buttonMeme3.addEventListener('click', addMeme3);

const buttonMeme4 = document.getElementById('meme-4');
function addMeme4() {
  divImage.src = buttonMeme4.src;
}
buttonMeme4.addEventListener('click', addMeme4);
