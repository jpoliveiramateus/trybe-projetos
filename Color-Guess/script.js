function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  return color;
}

document.getElementById('rgb-color').innerHTML = randomColor();

const colorBall = document.querySelectorAll('.ball');
function addColorBall() {
  for (let i = 0; i < colorBall.length; i += 1) {
    colorBall[i].style.backgroundColor = randomColor();
  }
  const rgb = document.getElementById('rgb-color').textContent;
  colorBall[Math.floor(Math.random() * 5)].style.backgroundColor = rgb;
}
addColorBall();

const result = document.getElementById('answer');

function addScore() {
  const score = document.getElementById('score');
  if (result.textContent === 'Acertou!') {
    score.innerHTML = parseInt(document.getElementById('score').textContent, 10) + 3;
  }
}

function clickBall() {
  for (let i = 0; i < colorBall.length; i += 1) {
    colorBall[i].addEventListener('click', () => {
      if (colorBall[i].style.backgroundColor === document.getElementById('rgb-color').textContent) {
        result.innerHTML = 'Acertou!';
      } else {
        result.innerHTML = 'Errou! Tente novamente!';
      }
      addScore();
    });
  }
}
clickBall();

function resetGame() {
  document.getElementById('rgb-color').innerHTML = randomColor();
  result.innerHTML = 'Escolha uma cor';
  addColorBall();
}
const reset = document.getElementById('reset-game');
reset.style.backgroundColor = randomColor();
reset.addEventListener('click', resetGame);

window.document.querySelector('body').style.backgroundColor = randomColor();
