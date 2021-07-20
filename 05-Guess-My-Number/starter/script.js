'use strict';

const check = document.querySelector('.check');
const guess = document.querySelector('.guess');
const message = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const again = document.querySelector('.again');
const title = document.querySelector('.title');

const randNum = (min, max) => {
  return Math.ceil(Math.random() * (max - min) + min);
};

let magicNum = randNum(0, 20);
let score = 20;

const domScore = document.querySelector('.score');

check.addEventListener('click', () => {
  const guessValue = guess.value;
  if (!guessValue) {
    message.textContent = 'Add a number you freak';
  } else if (guessValue !== magicNum) {
    if (score > 0) {
      score--;
    }
    domScore.textContent = score;
    if (guessValue > magicNum) {
      message.textContent = 'Guess too high';
    } else if (guessValue < magicNum) {
      message.textContent = 'Guess too low';
    } else {
      message.textContent = 'You win!';
      document.querySelector('body').style.backgroundColor = 'green';
      highscore.textContent = score;
    }
  }
  guess.value = '';
  if (!score) {
    document.querySelector('body').style.backgroundColor = 'crimson';
    title.textContent = 'You suck poopoo!';
  }
});

again.addEventListener('click', () => {
  score = 20;
  message.textContent = 'Start guessing...';
  title.textContent = 'Guess My Number!';
  document.querySelector('body').style.backgroundColor = '#222';
  domScore.textContent = 20;
  magicNum = randNum(0, 20);
});
