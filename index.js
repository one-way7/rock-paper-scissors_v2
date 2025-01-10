const selectionButtons = document.querySelectorAll('button');
const resultDiv = document.querySelector('.results');

let humanScore = 0;
let computerScore = 0;

selectionButtons.forEach(button => button.addEventListener('click', playGame));

function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choiceNumber];
}

function playRound(humanChoice, computerChoice) {
    const TIE = 2;
    const PLAYER_WIN = 0;
    const COMPUTER_WIN = 1;

    const winningCombinations = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper',
    }

    if (humanChoice === computerChoice) {
        return TIE;
    } else if (winningCombinations[humanChoice] === computerChoice) {
        return PLAYER_WIN;
    } else {
        return COMPUTER_WIN;
    }
}

function checkWinner() {
    if (humanScore > 4) {
        updateResultMessage('PLAYER WIN THE GAME!')
        resetGame();
        return true;
    }

    if (computerScore > 4) {
        updateResultMessage('COMPUTER WIN THE GAME!')
        resetGame();
        return true;
    }

    return false;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
}

function updateResultMessage(message) {
    resultDiv.textContent = message;
}

function playGame(e) {
    const humanSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    let roundResult;

    roundResult = playRound(humanSelection, computerSelection);

    switch (roundResult) {
        case 0: {
            humanScore += 1;

            if (checkWinner()) return;
            updateResultMessage(`PLAYER WIN! Player Score: ${humanScore}. Computer Score: ${computerScore}`);
            return;
        }
        case 1: {
            computerScore += 1;

            if (checkWinner()) return;
            updateResultMessage(`COMPUTER WIN! Player Score: ${humanScore}. Computer Score: ${computerScore}`);
            return;
        }
        case 2: {
            updateResultMessage(`TIE! Player Score: ${humanScore}. Computer Score: ${computerScore}`);
            return;
        }
    }

}