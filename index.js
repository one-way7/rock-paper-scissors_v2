function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choiceNumber];
}

function getHumanChoice() {
    let humanChoice = '';
    let isValidInput = false;

    do {
        humanChoice = prompt('What\'s your sign?').trim().toLowerCase();

        switch (humanChoice) {
            case 'rock':
            case 'paper':
            case 'scissors': {
                count = 1;
                break;
            }
            default: {
                alert('Type correct input');
            }
        }
    } while (!isValidInput);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 2;
    } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        return 0;
    } else {
        return 1;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundResult;

        roundResult = playRound(humanSelection, computerSelection);

        switch (roundResult) {
            case 0: {
                humanScore += 1;
                console.log(`Player Win! Player: ${humanScore}, Computer: ${computerScore}.`);
                break;
            }
            case 1: {
                computerScore += 1;
                console.log(`Computer Win! Player: ${humanScore}, Computer: ${computerScore}.`);
                break;
            }
            case 2: {
                console.log(`Tie! Player: ${humanScore}, Computer: ${computerScore}.`);
                break;
            }
        }
    }

    if (humanScore > computerScore) {
        console.log('Human Win!');
    } else if (computerScore > humanScore) {
        console.log('Computer Win!');
    } else {
        console.log('Tie!');
    }
}