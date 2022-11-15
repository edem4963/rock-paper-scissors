// Create getComputerChoice function
// 1) create 3 variable ( Rock Paper Scissors)
// 2) if random function return a 1 return variable Rock  
// 3)randomly pick 1 of the 3 variables
// 4) return selected variable 

let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissor";
const playerSelection = "Rock";
const computerSelection = getComputerChoice();

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
    if ( playerSelection == choice3 ){
        return "I lost! Rock beats scissor";
    } 
    
    else if ( playerSelection == choice2 ) {
        return "I won! Paper beats rock";
    } 
    
    else {
        return "Tie! Go again!"
    }
}