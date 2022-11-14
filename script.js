// Create getComputerChoice function
// 1) create 3 variable ( Rock Paper Scissors)
// 2) if random function return a 1 return variable Rock  
// 3)randomly pick 1 of the 3 variables
// 4) return selected variable 

let choice1 = "Rock"
let choice2 = "Paper"
let choice3 = "Scissor"

function getComputerChoice(){
    
    let x = Math.floor((Math.random() * 99) + 1);
    
    if (x <= 33) {
        return choice1;
    } 
    
    if (x > 33 && x <= 66) {
        return choice2;
    } else {
        return choice3;
    }
}
