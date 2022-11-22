let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice(){
    const arr = ["Rock", "Paper", "Scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection){
    
        if(playerSelection === computerSelection)
            return `You Tied! Both selected ${computerSelection}`;
        else if (playerSelection === "Rock" && computerSelection === "Paper"){
            computerCounter++;
            return `You Lose! Paper beats Rock`;
        }
        else if (playerSelection === "Rock" && computerSelection === "Scissors"){
            playerCounter++;
            return `You Win! Rock beats Scissors`;
        }
        else if (playerSelection === "Paper" && computerSelection === "Rock"){
            playerCounter++;
            return `You Win! Paper beats Rock`;
        }
        else if (playerSelection === "Paper" && computerSelection === "Scissors"){
            computerCounter++;
            return `You Lose! Scissors beat Paper`;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Rock"){
            computerCounter++;
            return `You Lose! Rock beats Scissors`;
        }
        else if (playerSelection === "Scissors" && computerSelection === "Paper"){
            playerCounter++;
            return `You Win! Scissors beat Paper`;
        }
        else
            return `Invalid input, try again`;
}

function checkCounter(){
    if(playerCounter >= 5){
        console.log("You Win!");
        playerCounter = 0;
        computerCounter = 0;
    } else if(computerCounter >= 5){
        console.log("You Lose!");
        playerCounter = 0;
        computerCounter = 0;
    }
    playerScore.textContent = `Your score: ${playerCounter}`;
    computerScore.textContent = `Computer score: ${computerCounter}`;
}

const btnRock = document.createElement("button");
btnRock.textContent = "Rock";
btnRock.addEventListener("click", function(){
    console.log(playRound("Rock", getComputerChoice()));
    checkCounter();
})

const btnPaper = document.createElement("button");
btnPaper.textContent = "Paper";
btnPaper.addEventListener("click", function(){
    console.log(playRound("Paper", getComputerChoice()));
    checkCounter();
})

const btnScissors = document.createElement("button");
btnScissors.textContent = "Scissors";
btnScissors.addEventListener("click", function(){
    console.log(playRound("Scissors", getComputerChoice()));
    checkCounter();
})

const playerScore = document.createElement("h1");
playerScore.textContent = `Your score: ${playerCounter}`;

const computerScore = document.createElement("h1");
computerScore.textContent = `Computer score: ${computerCounter}`;

const container = document.querySelector("#container");
container.appendChild(playerScore);
container.appendChild(computerScore);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);