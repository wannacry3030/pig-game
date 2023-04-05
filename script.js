'use strict';

//criando variaveis, selecionando os elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //para multiplos elementos
const diceEl = document.querySelector('.dice');

//especificando a condição inicial
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
