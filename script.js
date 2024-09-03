let humanScore = 0;
let computerScore = 0;
let count = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const text_1 = document.querySelector(".text_1");
const text_2 = document.querySelector(".text_2");

rock.onclick = ()  => playGame("rock");
paper.onclick = ()  => playGame("paper");
scissors.onclick = ()  => playGame("scissors");

function playGame(humanChoice){
    playRound(humanChoice, getComputerChoice());
    
    text_2.textContent = "Your score: " + humanScore + "  ||  " + "Computer's score: " + computerScore;


    if(count >= 5){
        if(computerScore > humanScore)
            text_1.textContent = "You lost the game! :(";
        else if (humanScore > computerScore)
            text_1.textContent = "You won the game! :)";
        else
            text_1.textContent = "The game was a draw!";

        text_2.textContent = "Select any option to start another game";

        count = 0;
        computerScore = 0;
        humanScore = 0;
    }
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "paper" && computerChoice == "rock") || 
        (humanChoice == "scissors" && computerChoice == "paper") ||
        (humanChoice == "rock" && computerChoice == "scissors")
    ){
        humanScore++;
        text_1.textContent = "You won! " + humanChoice + " beats " + computerChoice;
    }
    else if (humanChoice == computerChoice){
        text_1.textContent = "It's a draw!";
    }
    else {
        computerScore++;
        text_1.textContent = "You lost! " + computerChoice + " beats " + humanChoice;
    }

    count++;
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