let computerSelection = "";
let playerSelection = "";

function getComputerChoice(){
    const arr = ["Rock", "Paper", "Scissors"];
    computerSelection = arr[Math.floor(Math.random() * arr.length)];
}

