// Create getComputerChoice function
// 1) create 3 variable ( Rock Paper Scissors)
// 2) if random function return a 1 return variable Rock  
// 3)randomly pick 1 of the 3 variables
// 4) return selected variable 

let choice1 = "Rock";
let choice2 = "Paper";
let choice3 = "Scissor";

function getComputerChoice(){
    
    let x = Math.floor((Math.random() * 3) + 1);
    
    if (x == 1) {
        return choice1;
    } 
    
    else if (x == 2) {
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

//const playerSelection = prompt("Please enter rock, paper or scissor: ");
const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

//button selections events
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');
//button event listener to play rounds
/* rock.addEventListener('click', () =>{
    playerSelection = rock.value = "rock";
    console.log(playRound(playerSelection, computerSelection));
}) */
/* paper.addEventListener('click', () =>{
    playerSelection = paper.value = "paper";
    console.log(playRound(playerSelection, computerSelection));
})
scissor.addEventListener('click', () =>{
    playerSelection = scissor.value = "scissor";
    console.log(playRound(playerSelection, computerSelection));
}) */

let playerPoints = 0;
let computerPoints = 0;

function game(){
    for ( let i = 0; i < 1 ; i++ ) {
        //const playerSelection = '';
        const computerSelection = getComputerChoice();
        //let playerPoints = 0;
        //let computerPoints = 0;
  
         
    // If statement for when player wins games
        if ((playerSelection == playerSelection.match(/rock/i) && computerSelection == "Scissor")
    ||(playerSelection == playerSelection.match(/paper/i) && computerSelection == "Rock")
    ||(playerSelection == playerSelection.match(/scissor/i) && computerSelection == "Paper")){
            
        console.log("Player points: +1" );
        playerPoints += 1;
    }
    //if statement if statement for when compter wins game
        else if ((playerSelection == playerSelection.match(/rock/i) && computerSelection == "Paper" )
    ||(playerSelection == playerSelection.match(/paper/i) && computerSelection == "Scissor")
    ||(playerSelection == playerSelection.match(/scissor/i) && computerSelection == "Rock")){
            
        console.log("Computer points: +1 "  ) ;
        computerPoints += 1;
    }
    // if statement for tied game
        else if ((playerSelection.match(/paper|rock|scissor/i)) == computerSelection ){
        console.log("Computer points: "  ) ;
    }
        //result( playerSelection, computerSelection );
    
    console.log(playRound(playerSelection, computerSelection));
    }
    
    let playerScore = playerPoints;
    let computerScore = computerPoints;
    

    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore)
}
// test game function into event listener
rock.addEventListener('click', () =>{
    playerSelection = rock.value = "rock";
    game();
})

paper.addEventListener('click', () =>{
    playerSelection = paper.value = "paper";
    game();
})

scissor.addEventListener('click', () =>{
    playerSelection = scissor.value = "scissor";
    game();
})