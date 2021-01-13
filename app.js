import { calculateNumber } from './utils.js';

const guesses = document.querySelector('guess-assess');
const remainingGuessSpan = document.querySelector('remaining-guess');
const userInput = document.querySelector('user-input');
const resultDisplay = document.querySelector('result-display');
const submitButton = document.getElementById('button');
const resetButton = document.getElementById('reset-button');


let guessesRemaining = 4;
let randomNumber = Math.ceil(Math.random() * 20);

submitButton.addEventListener('click', () => {
    
    --guessesRemaining;

    remainingGuessSpan.textContent = 'guesses-Remaining';
    
    let userGuess = (Number(userInput.value));
    let answer = calculateNumber(userGuess, randomNumber);
    if (answer === 1) {
        guesses.textContent = 'guess was too high';
    } else if (answer === -1) {
        guesses.textContent = 'guessing pretty low !';
    } else if (answer === 0) {
        guesses.textContent = 'congrats';
        userInput.style.display = 'none';
        resultDisplay.textContent = 'You Won!';
        submitButton.disabled = true;
    }
    if (guessesRemaining === 0 && answer !== 0) {
        userInput.style.display = 'none';
        resultDisplay.textContent = `You lost! The right number was ${randomNumber}`;
        submitButton.disabled = true;
    }

});

resetButton.addEventListener('click', () => {
    guessesRemaining = 4;
    remainingGuessSpan.textContent = guessesRemaining;
    userInput.value = '';
    randomNumber = Math.ceil(Math.random() * 20);
    submitButton.disabled = false;
});