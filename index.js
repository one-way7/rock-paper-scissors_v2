function getComputerChoice() {
    const choiceNumber = Math.floor(Math.random() * 3);
    return ['rock', 'paper', 'scissors'][choiceNumber];
}