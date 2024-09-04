// DECLARE a var named computerChoice, that store randomly one of : ROCK, PAPER, SCISSORS,      initialize it with empty string ""
let computerChoice = "";
// DECLARE a var named userChoice, that will store the user choice, and                         initialize it with empty string ""
let userChoice = "";

// DECLARE a var named computerScore, and initialize it with 0
let computerScore = 0;
// DECLARE a var named userScore,     and initialize it with 0
let userScore = 0;

// DECLARE a var named roundCounter, and initialize it with 1
let roundCounter = 1;
// DECLARE a var named roundWinner, and initialize it with empty string: ""
let roundWinner = "";

// getComputerChoice() returns one of: "ROCK, PAPER, SCISSORS"
function getComputerChoice(){
    let randNum = Math.round((Math.random())*100);//stores a number between 0 & 100;

    if((randNum >= 0) && (randNum <= 33)){
        return "ROCK";
    }
    else if ((randNum > 33) && (randNum <= 66)){
        return "PAPER";
    }
    else {
        return "SCISSORS";
    }
}

// getUserChoice() function ask user to choose one of: "ROCK, PAPER, SCISSORS"
// It also validate user input:
    //if user didn't enter the right input it will keep asking until get the right value
function getUserChoice(){
    let userChoice = "";
    userChoice = prompt("Choose one of: ROCK, PAPER, SCISSORS");
    userChoice = userChoice.toUpperCase();

    while((userChoice !== "ROCK") && (userChoice !== "PAPER") && (userChoice !== "SCISSORS")){
        userChoice = prompt("Your weapon is NOT VALID, please enter one of: 'ROCK, PAPER, SCISSORS'");
        userChoice = userChoice.toUpperCase();
    }
    return userChoice;
}
