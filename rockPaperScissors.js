//Variables for user and computer choices
var userChoice;
var computerChoice;

//Get and print user input through prompt
var userPrompt= function() {
    var userInput = prompt("Do you choose rock, paper or scissors?");
    //Only allow choice of rock, paper, or scissors
    while(userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
         confirm(userInput + " is an invalid entry.");
         userInput = prompt("Do you choose rock, paper or scissors?");
    }
    userChoice = userInput;
    console.log("User " + userChoice);
}

//Get and print computer input through randomization
var computerRandomize = function() {
    var computerNumber = Math.random();
    if (computerNumber < 0.34) {
    	computerChoice = "rock";
    }
    else if(computerNumber <= 0.67) {
    	computerChoice = "paper";
    }
    else {
    	computerChoice = "scissors";
    }
    console.log("Computer: " + computerChoice);
}

//Compare the result of both choices
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        //If a tie occurs, runs the code again
        console.log("The result is a tie! Choose again!");
        userPrompt();
        computerRandomize();
        compare(userChoice, computerChoice);
    } 
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return("rock wins");
        }
        else {
            return("paper wins");
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return("paper wins");
        }
        else {
            return("scissors wins");
        }
    }
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return("rock wins");
        }
        else {
            return("scissors wins");
        }
    }
    else {
        return("incorrect user input");
    }
}

//Run the above functions to get both inputs and compare them
userPrompt();
computerRandomize();
compare(userChoice, computerChoice);