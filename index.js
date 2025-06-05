const userInput = document.querySelector('#user-input');
const confirmBtn = document.querySelector('#confirm-guess-btn');
const resultDisplay = document.querySelector('#result');

let computerGuess = Math.floor(Math.random() * 10) + 1;
console.log(computerGuess);


function checkGuess() {
    let userGuess = parseInt(userInput.value, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10 || !Number.isInteger(userGuess)) {
        resultDisplay.textContent = 'Please enter a valid integer between 1 and 10.';
        userInput.value = '';
        userInput.focus();
        return;
    }
    
    if (userGuess === computerGuess) {
        resultDisplay.textContent = 'Congratulations! You guessed the number!';
        computerGuess = Math.floor(Math.random() * 10) + 1; 
        console.log(computerGuess);

    }
    else if (userGuess < computerGuess) {
        resultDisplay.textContent = 'Too low! Try again.';
    } else {
        resultDisplay.textContent = 'Too high! Try again.';
    }
    userInput.value = '';
    userInput.focus();
}

confirmBtn.addEventListener('click', () => {
    checkGuess();
});