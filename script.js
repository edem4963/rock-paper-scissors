// Create getComputerChoice function
// 1) create 3 variable ( Rock Paper Scissors)
// 2) if random function return a 1 return variable Rock  
// 3)randomly pick 1 of the 3 variables
// 4) return selected variable 

let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissor";
let playerSelection = "Rock";
let computerSelection = getComputerChoice();

function getComputerChoice(){
    
    let x = Math.floor((Math.random() * 99) + 1);
    
    if (x <= 1) {
        return choice1;
    } 
    
    else if (x > 1 && x <= 98) {
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
    //if ( playerSelection === computerSelection  ) {
      //  return "I won! Paper beats rock";
    //} 
    if ( playerSelection === "Rock" && computerSelection === "Paper" ){
        return "I won! Paper beats rock";
    }
}