const btnentrar = document.querySelector('.btnentrar');
const email = document.getElementById('email');
const senha = document.getElementById('password');

function validacaoLogin() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
btnentrar.addEventListener('click', validacaoLogin);

const btnenviar = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

function validacaoCheckbox() {
  if (checkbox.checked === true) {
    btnenviar.disabled = false;
  } else {
    btnenviar.disabled = true;
  }
}
checkbox.addEventListener('click', validacaoCheckbox);

const contador = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');
contador.innerText = 500;

function contarCaracteres() {
  const texto = areaTexto.value.length;
  contador.innerText = 500 - texto;
}
areaTexto.addEventListener('keyup', contarCaracteres);

const formulario = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email2 = document.getElementById('input-email');
const casa = document.getElementById('house');
const texto = document.getElementById('textarea');
const main = document.querySelector('.principal');
const logo = document.getElementById('trybewarts-forms-logo');

function estaChecadoFamilia() {
  const listaMarcados = document.getElementsByName('family');
  let result = '';
  for (let i = 0; i < listaMarcados.length; i += 1) {
    if (listaMarcados[i].checked) {
      result = listaMarcados[i].value;
    }
  }
  return result;
}

function estaChecadoAvaliacao() {
  const listaAvaliacao = document.getElementsByName('rate');
  let result = '';
  for (let i = 0; i < listaAvaliacao.length; i += 1) {
    if (listaAvaliacao[i].checked) {
      result = listaAvaliacao[i].value;
    }
  }
  return result;
}

function estaChecandoMateria() {
  const listaMateria = document.getElementsByName('materia');
  let result = '';
  for (let i = 0; i < listaMateria.length; i += 1) {
    if (listaMateria[i].checked) {
      result += `${listaMateria[i].value}, `;
    }
  }
  return result;
}

btnenviar.addEventListener('click', (event) => {
  event.preventDefault();
  main.removeChild(logo);
  const formularioNovo = document.createElement('form');
  formularioNovo.setAttribute('id', 'evaluation-form');
  formularioNovo.className = 'formNovo';
  const p = document.createElement('p');
  p.setAttribute('id', 'resultado');
  p.innerText = `Nome: ${nome.value} ${sobrenome.value}
  Email: ${email2.value}
  Casa: ${casa.value}
  Família: ${estaChecadoFamilia()}
  Matérias: ${estaChecandoMateria()}
  Avaliação: ${estaChecadoAvaliacao()}
  Observações: ${texto.value}`;
  main.removeChild(formulario);
  formularioNovo.appendChild(p);
  main.appendChild(formularioNovo);
});
