const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(buttonClicked => buttonClicked.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    // Returns a random integer from 0 to 9:
    // Example: Math.floor(Math.random() * 10);

    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // 3

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Scissors';
    }
    if (randomNumber === 3) {
        computerChoice = 'Paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Its a draw!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Paper') {
        result = 'You Win!';
    }
    if (computerChoice === 'Rock' && userChoice === 'Scissors') {
        result = 'You Lose!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Scissors') {
        result = 'You Win!';
    }
    if (computerChoice === 'Paper' && userChoice === 'Rock') {
        result = 'You Win!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Rock') {
        result = 'You Win!';
    }
    if (computerChoice === 'Scissors' && userChoice === 'Paper') {
        result = 'You Lose!';
    }
    resultDisplay.innerHTML = result;
}
