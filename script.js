'use strict';

//criando variaveis, selecionando os elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //para multiplos elementos
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//especificando a condição inicial
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//funcionalidade de rolar o dado
btnRoll.addEventListener('click', function () {
  //1. gerando um valor aleatorio
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);
  //2. mostrar o dado na tela
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3. checar se foi 1: se for, passar pro proximo jogador
  if (dice !== 1) {
    //adicionar o valor a pontuação atual
    currentScore += dice;
  } else {
    //muda de jogador
  }
});
