let computerChoice = "";
let userChoice = "";

let computerScore = 0;
let userScore = 0;

let roundCounter = 1;
let roundWinner = "";

let gameWinner = "";

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


// playRound() function compare user & computer choices,
// & returns winner, or "TIE" for a tie game
function playRound(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return "TIE";
    }
    else if(
            ((userChoice === "ROCK")     &&     (computerChoice === "SCISSORS"))
        ||  ((userChoice === "SCISSORS") &&     (computerChoice === "PAPER"))
        ||  ((userChoice === "PAPER")    &&     (computerChoice === "ROCK"))
    )
    {//This block is related to the adjacent above "else if" statement
        return "USER";
    }
    else {
        return "COMPUTER";
    }   
}

function updateScore(roundWinner){
    if(roundWinner === "TIE"){
        // DO NOTHING, UPDATE NOTHING
    }
    else if(roundWinner === "USER"){
        ++userScore;
    }
    else {
        ++computerScore;
    }
}

function displayRoundData(){
    if(roundWinner === "TIE" ){
        console.log(`###############   Round Number: ${roundCounter}   ###############`);
        console.log(`Your-Score  : 0${userScore}\t\t Computer-Score : 0${computerScore}`);
        console.log(`Your Choice : ${userChoice}\t\t Computer Choice: ${computerChoice}`);
        console.log("ROUND-WINNER: A TIE ROUND")
        console.log(`\n`);
    }
    else if(roundWinner === "USER"){
        console.log(`###############   Round Number: ${roundCounter}   ###############`);
        console.log(`Your-score  : 0${userScore}\t\t Computer-Score : 0${computerScore}`);
        console.log(`Your Choice : ${userChoice}\t\t Computer Choice: ${computerChoice}`);
        console.log("ROUND-WINNER: USER")
        console.log(`\n`);
    }
    else {
        console.log(`###############   Round Number: ${roundCounter}   ###############`);
        console.log(`Your-score  : 0${userScore}\t\t Computer-Score : 0${computerScore}`);
        console.log(`Your Choice : ${userChoice}\t\t Computer Choice: ${computerChoice}`);
        console.log("ROUND-WINNER: COMPUTER")
        console.log(`\n`);
    }

}

function displayGameWinner(){
    if(userScore === computerScore) {
        console.log(`\n`);
        console.log(">>>>>> IT IS A TIE GAME <<<<<<");
    }

    else if(userScore > computerScore){
        console.log(`\n`);
        console.log(">>>>>> You're the WINNER! <<<<<<");
    }
    else{
        console.log(`\n`);
        console.log(">>>>>> You lost; the Computer is the GAME WINNER <<<<<<");
    }

}

// resetGameData() returns the game to the initial state
function resetGameData(){
    computerScore = 0;
    userScore = 0;
    roundCounter = 1;
}

function newGame(){
    console.clear();
    resetGameData();
    playGame();
}


// The main function, it is the one responsible for running the game
function playGame(){
    while(roundCounter <= 5){

        computerChoice = getComputerChoice();
        userChoice = getUserChoice();

        roundWinner = playRound(userChoice, computerChoice);

        updateScore(roundWinner);

        displayRoundData();
        ++roundCounter;

    }


    displayGameWinner();

    console.log(`\n`);
    console.log("If you want to play a new game, call newGame() function from the console: just type newGame(), and don't forget the parenthesis ()")
}

// playGame();