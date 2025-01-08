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