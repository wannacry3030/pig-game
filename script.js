'use strict';

//criando variaveis, selecionando os elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  //toggle serve para ativar/desativar uma classe, se ele estiver ativada, ira desativar, e vice-versa
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//funcionalidade de rolar o dado
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //muda de jogador
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. adicionar o a pontuação ao total
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. checar se a pontuação é >= 100
    if (scores[activePlayer] >= 20) {
      //terminar o jogo
      playing = false;
      diceEl.classList.toggle('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //caso nao seja, mudar o jogador
      switchPlayer();
    }
  }
});
