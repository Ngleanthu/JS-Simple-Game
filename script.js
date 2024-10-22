'use strict';

// Select elements by id
let player_0 = document.querySelector('.player--0');
let player_1 = document.querySelector('.player--1');

let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');

let activePlayer, currentScore, scores, playing;

const init = function () {
  activePlayer = 0;
  currentScore = 0;
  scores = [0, 0];
  playing = true;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  document.querySelector('.dice').classList.add('hidden');
  player_0.classList.add('player--active');
  player_1.classList.remove('player--active');
  player_0.classList.remove('player--winner');
  player_1.classList.remove('player--winner');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player_0.classList.toggle('player--active');
  player_1.classList.toggle('player--active');
};

// Reset score and dice image
init();

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice point;
    let randomPoint = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    document.querySelector('.dice').classList.remove('hidden');
    document.querySelector('.dice').src = `dice-${randomPoint}.png`;

    // 3. Check for rolled 0: if true, switch to next player
    if (randomPoint !== 1) {
      currentScore += randomPoint;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
