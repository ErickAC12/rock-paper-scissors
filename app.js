function getComputerChoice(){
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    
        if(playerSelection.toLowerCase() === computerSelection.toLowerCase())
            return `You Tied! Both selected ${computerSelection}`;
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Paper")
            return `You Lose! Paper beats Rock`;
        else if (playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors")
            return `You Win! Rock beats Scissors`;
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")
            return `You Win! Paper beats Rock`;
        else if (playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors")
            return `You Lose! Scissors beat Paper`;
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
            return `You Lose! Rock beats Scissors`;
        else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
            return `You Win! Scissors beat Paper`;

        // In case the user doesn´t enter a valid input
        else
            return `Invalid input, try again`;
}

let computerSelection = getComputerChoice();
let playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));