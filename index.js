let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choiceNumber];
}

function getHumanChoice() {
    let humanChoice = '';
    let count = 0;

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
    } while (count < 1);

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Tie!');
    } else if (
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        humanScore += 1;
        console.log('Human Win!');
        return;
    } else {
        computerScore += 1;
        console.log('computer Win!');
        return;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);