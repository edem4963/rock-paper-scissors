// Create getComputerChoice function
// 1) create 3 variable ( Rock Paper Scissors)
// 2) if random function return a 1 return variable Rock  
// 3)randomly pick 1 of the 3 variables
// 4) return selected variable 

let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissor";

function getComputerChoice(){
    
    let x = Math.floor((Math.random() * 99) + 1);
    
    if (x <= 33) {
        return choice1;
    } 
    
    else if (x > 33 && x <= 66) {
        return choice2;
    } 
    
    else {
        return choice3;
    }
}

// create function playRound 
// 1)function take in 2 parameter(player choice and computer choice)
// 2)if statement to return result based on entered information(this 
//   did not work because all string results return NaN which makes all result falsy)


function playRound(playerSelection, computerSelection) {
    if ( playerSelection == playerSelection.match(/rock/i) && computerSelection == "Paper" ){
        return "I won! Paper beats rock";
    }

    if ( playerSelection == playerSelection.match(/rock/i) && computerSelection == "Scissor" ){
        return "Dang! Rock beats scissor";
    }

    if ( playerSelection == playerSelection.match(/rock/i) && computerSelection == "Rock" ){
        return "Tie?! Lets Go again!";
    }

    if ( playerSelection == playerSelection.match(/paper/i) && computerSelection == "Rock" ){
        return "Oh no! Paper beats rock";
    }

    if ( playerSelection == playerSelection.match(/paper/i) && computerSelection == "Paper" ){
        return "Tie?! Lets Go again!";
    }

    if ( playerSelection == playerSelection.match(/paper/i) && computerSelection == "Scissor" ){
        return "I won! Scissor beats paper";
    }

    if ( playerSelection == playerSelection.match(/scissor/i) && computerSelection == "Rock" ){
        return "I won! Rock beats scissor";
    }

    if ( playerSelection == playerSelection.match(/scissor/i) && computerSelection == "Paper" ){
        return "Oh no! Scissor beats paper";
    }

    if ( playerSelection == playerSelection.match(/scissor/i) && computerSelection == "Scissor" ){
        return "Tie?! Lets Go again!";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));