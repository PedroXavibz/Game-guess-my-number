///////////////////////////
// Elements
const form = document.querySelector('form');
const bntPlayAgain = document.querySelector('.btn-play-again');
const labelPlayerNumber = document.querySelector('input[name=player-input]');
const labelAttemps = document.querySelector('.attemps');
const labelScore = document.querySelector('.score');
const labelTips = document.querySelector('.game__info--tip');
const labelValue = document.querySelector(
  '.game__play__container--number-value'
);

///////////////////////////
// Functions
const generateNumber = function () {
  return Math.trunc(Math.random() * 15) + 1;
};

const resetGame = function () {
  return false;
};

let value = generateNumber();
let attemps = 10;
let score = 0;

// Handlers
form.addEventListener('submit', function (e) {
  e.preventDefault();

  labelAttemps.textContent = attemps;

  // Game over
  if (attemps <= 0) {
    labelTips.textContent = 'Game over 😅';
    labelScore.textContent = 0;
    bntPlayAgain.classList.remove('hidden');
    return false;
  }

  const playerChoice = +labelPlayerNumber.value;

  // Invalid value
  if (playerChoice > 15 || playerChoice < 0) {
    labelTips.textContent = 'Number invalid ❌';
    return false;
  }

  // High | Low value
  playerChoice > value
    ? (labelTips.textContent = 'High value 📈')
    : (labelTips.textContent = 'Low value 📉');

  // Win
  if (playerChoice === value) {
    score++;

    labelValue.textContent = value;
    labelTips.textContent = 'Yeah 🥳';
    labelScore.textContent = score;

    bntPlayAgain.classList.remove('hidden');
  }

  attemps--;
});

bntPlayAgain.addEventListener('click', function () {
  value = generateNumber();
  attemps = 10;

  // Reset UI
  labelTips.textContent = 'Choice a number';
  labelValue.innerHTML = '<i class="fas fa-question"></i>';
  labelPlayerNumber.value = '';
  labelAttemps.textContent = attemps;

  this.classList.add('hidden');
});
