'use strict';

let msg = document.querySelector('.message');
const guess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const body = document.querySelector('body');
const scoreDisplay = document.querySelector('.score');
const highScoreDisplay = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');
const numberDisplay = document.querySelector('.number');

let userGuess;
let score = 20;
let highScore = 0;
let rand;
rand = makeRand();
console.log(rand);

function makeRand() {
  return Math.floor(Math.random() * 20) + 1;
}

guess.addEventListener('change', function () {
  userGuess = parseInt(this.value);
});

btnCheck.addEventListener('click', () => {
  if (userGuess > rand) {
    msg.innerHTML = 'Too High...';
    guess.value = '';
    score -= 1;
    scoreDisplay.innerHTML = score;
  } else if (userGuess < rand) {
    msg.innerHTML = 'Too Low...';
    guess.value = '';
    score -= 1;
    scoreDisplay.innerHTML = score;
  } else {
    msg.innerHTML = 'You Got it';
    numberDisplay.innerHTML = userGuess;
    body.style.backgroundColor = '#60b347';
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.innerHTML = highScore;
    }
  }
});

btnAgain.addEventListener('click', () => {
  guess.value = '';
  rand = makeRand();
  console.log(rand);
  score = 20;
  scoreDisplay.innerHTML = score;
  body.style.backgroundColor = '#222';
  msg.innerHTML = 'Start guessing...';
});
