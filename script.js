let humanScore = 0;
let computerScore = 0;

function playGame(){

    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
    }
    
    console.log("Your score: " + humanScore);
    console.log("Computer's score: " + computerScore);
    
    if(humanScore > computerScore)
        console.log("You won the game!");
    else if (humanScore < computerScore)
        console.log("You lost the game!");
    else
        console.log("The game was a draw!");
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors")
    ){
        humanScore++;
        console.log("You won! " + humanChoice + " beats " + computerChoice);
    }
    else if (humanChoice == computerChoice){
        console.log("It's a draw!");
    }
    else {
        computerScore++;
        console.log("You lost! " + computerChoice + " beats " + humanChoice);
    }
}

function getComputerChoice(){
    let choice = Math.random();
    if(choice > 0.66)
        return "rock";
    else if(choice > 0.33)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:");
    return choice.toLowerCase();
}

playGame();