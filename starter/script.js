'use strict';

//WHAT IS THE DOM (Document Object Model)?
//Structured representation of HTML documents. Allows JavaScript to access HTML elementes and styles to manipulate them.

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! ð';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;*/

//Event: it's something that happens on the page.

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('â No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! ð');
    document.querySelector('.number').textContent = secretNumber;

    //Restore values
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Implementing highscore

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'ð Too high!' : 'ð Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('ð¥You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
