function addColor(event) {
  const selected = document.querySelector('.selected');
  if (selected === null) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

const classTwo = 'completed selected';
function ristTask(event) {
  if (event.target.className === classTwo) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

const list = document.getElementById('lista-tarefas');
function clearList() {
  const items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i += 1) {
    list.removeChild(items[i]);
  }
}
const clear = document.getElementById('apaga-tudo');
clear.addEventListener('click', clearList);

function clearFinished() {
  const item = document.querySelectorAll('li');
  for (let i = 0; i < item.length; i += 1) {
    if (item[i].className === 'completed' || item[i].className === 'selected completed') {
      list.removeChild(item[i]);
    }
  }
}
const clearF = document.getElementById('remover-finalizados');
clearF.addEventListener('click', clearFinished);

function clearSelected() {
  const item = document.querySelectorAll('li');
  for (let i = 0; i < item.length; i += 1) {
    if (item[i].className === 'selected' || item[i].className === 'selected completed') {
      list.removeChild(item[i]);
    }
  }
}
const clearS = document.getElementById('remover-selecionado');
clearS.addEventListener('click', clearSelected);

function moveUp() {
  const item = document.querySelectorAll('li');
  const classOne = 'selected';
  for (let i = 0; i < item.length; i += 1) {
    if ((item[i].className === classOne || item[i].className === classTwo) && item[i] !== item[0]) {
      const saveClass = item[i].className;
      const saveTwoClass = item[i - 1].className;
      const save = item[i].textContent;
      const saveTwo = item[i - 1].textContent;
      item[i].textContent = saveTwo;
      item[i].className = saveTwoClass;
      item[i - 1].textContent = save;
      item[i - 1].className = saveClass;
    }
  }
}
const buttonMoveUp = document.getElementById('mover-cima');
buttonMoveUp.addEventListener('click', moveUp);

function moveDown() {
  const item = document.querySelectorAll('li');
  const classOne = 'selected';
  const test = item[item.length - 1];
  for (let i = item.length - 1; i >= 0; i -= 1) {
    if ((item[i].className === classOne || item[i].className === classTwo) && item[i] !== test) {
      const saveClass = item[i].className;
      const saveTwoClass = item[i + 1].className;
      const save = item[i].textContent;
      const saveTwo = item[i + 1].textContent;
      item[i].textContent = saveTwo;
      item[i].className = saveTwoClass;
      item[i + 1].textContent = save;
      item[i + 1].className = saveClass;
    }
  }
}
const buttonMoveDown = document.getElementById('mover-baixo');
buttonMoveDown.addEventListener('click', moveDown);

function addToLocalStorage() {
  const li = document.querySelectorAll('li');
  const test = [];
  const testTwo = [];
  for (let i = 0; i < li.length; i += 1) {
    test.push(document.querySelectorAll('li')[i].innerHTML);
    testTwo.push(document.querySelectorAll('li')[i].className);
    localStorage.setItem('li', JSON.stringify(test));
    localStorage.setItem('class', JSON.stringify(testTwo));
  }
}

function insertInDOM() {
  if (localStorage.getItem('li') === null) {
    localStorage.setItem('li', JSON.stringify([]));
  } else {
    const itemList = JSON.parse(localStorage.getItem('li'));
    const classList = JSON.parse(localStorage.getItem('class'));
    for (let i = 0; i < itemList.length; i += 1) {
      const li = document.createElement('li');
      li.innerHTML = itemList[i];
      li.className = classList[i];
      li.addEventListener('click', addColor);
      li.addEventListener('dblclick', ristTask);
      list.appendChild(li);
    }
  }
}

function addTask() {
  const task = document.getElementById('texto-tarefa');
  const itemList = document.createElement('li');
  itemList.innerHTML = task.value;
  list.appendChild(itemList);
  task.value = '';
  const lists = document.querySelectorAll('li');
  const save = document.getElementById('salvar-tarefas');
  save.addEventListener('click', addToLocalStorage);
  for (let i = 0; i < lists.length; i += 1) {
    lists[i].addEventListener('click', addColor);
    lists[i].addEventListener('dblclick', ristTask);
  }
}
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addTask);

window.onload = () => {
  insertInDOM();
};
