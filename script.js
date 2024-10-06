let computerChoice = "";
let userChoice = "";

let computerScore = 0;
let userScore = 0;

let roundWinner = "";

let gameWinner = "";

let userImgDisplay = document.querySelector('.user-space img');
let computerImgDisplay = document.querySelector('.computer-space img');

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

let computerScoreELem = document.querySelector('.score .computer');
let userScoreElem = document.querySelector('.score .user');

function updateScoreAndDisplayIt(roundWinner){
    if(roundWinner === "TIE"){
        // DO NOTHING, UPDATE NOTHING
    }
    else if(roundWinner === "USER"){
        ++userScore;
        userScoreElem.textContent = userScore;
    }
    else {
        ++computerScore;
        computerScoreELem.textContent = computerScore;
    }
}

// resetGameData() returns the game to the initial state
function resetGameData(){

    // reseting the score
    computerScore = 0;
    computerScoreELem.textContent = computerScore;

    userScore = 0;
    userScoreElem.textContent = userScore;

    // reseting images
    computerImgDisplay.src = "./images/sand-watch.png";
    userImgDisplay.src = "./images/sand-watch.png";
    resetImgEffects();

    // resiting the Game status
    gameStatusElem.textContent = "Waiting for game to start ...";
}

let gameStatusElem = document.querySelector('.game-status');
// The main function, it is the one responsible for running the game

let btnContainer = document.querySelector('.weapons');

btnContainer.addEventListener('click', playGame);

const resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', resetGameData);


function resetImgEffects(){
    userImgDisplay.classList.remove('winner');
    userImgDisplay.classList.remove('looser');
    userImgDisplay.classList.remove('tie');

    computerImgDisplay.classList.remove('winner');
    computerImgDisplay.classList.remove('looser');
    computerImgDisplay.classList.remove('tie');
}

function playGame(event){
    if((userScore < 5) && (computerScore < 5) ){
        gameStatusElem.textContent = "The Battle in ON";

        let target = event.target;

        // Will store one of ROCK, PAPER, SCISSORS in userChoice
        // depending on the button the user will click
        switch(target.id){
            case "ROCK":
                userChoice = "ROCK";
                break;
            case "PAPER":
                userChoice = "PAPER";
                break;
            case "SCISSORS":
                userChoice = "SCISSORS";
                break;
        }

        computerChoice = getComputerChoice();

        roundWinner = playRound(userChoice, computerChoice);

        updateScoreAndDisplayIt(roundWinner);

        if((computerScore === 5) || (userScore === 5)){
            (computerScore === 5)? gameWinner = "computer": gameWinner = "user";

            // remove the shadow and size effects
            resetImgEffects();

            // tie will add a gray background,
            // and will return the images to their original size
            computerImgDisplay.classList.add('tie');
            userImgDisplay.classList.add('tie');

            switch(gameWinner){
                case "user":
                    userImgDisplay.src = "./images/winner.png"
                    computerImgDisplay.src = "./images/looser.png"
                    gameStatusElem.textContent = "Congratulations: You're the Winner!!";


                    break;
                case "computer":
                    userImgDisplay.src = "./images/looser.png";
                    computerImgDisplay.src = "./images/winner.png";
                    gameStatusElem.textContent = "Don't Give Up: You'll win another time!!";
                    break;
            }
        }
        else {
            // display the weapon img that is related to the btn ..
            // .. that was clicked by the user
            switch(target.id){
                case "ROCK":
                    userImgDisplay.src = "./images/rock.png";
                    break;
                case "PAPER":
                    userImgDisplay.src = "./images/paper.png";
                    break;
                case "SCISSORS":
                    userImgDisplay.src = "./images/scissors.png";
                    break;
            }
            
            // display the weapon that has been chosen by computer
            switch(computerChoice){
                case "ROCK":
                    computerImgDisplay.src = "./images/rock.png";
                    break;
                case "PAPER":
                    computerImgDisplay.src = "./images/paper.png";
                    break;
                case "SCISSORS":
                    computerImgDisplay.src = "./images/scissors.png";
                    break;
            }

            // remove the classes
            resetImgEffects();


            switch(roundWinner){
                case "USER":
                    userImgDisplay.classList.add('winner');
                    computerImgDisplay.classList.add('looser');
                    break;
                case "COMPUTER":
                    userImgDisplay.classList.add('looser');
                    computerImgDisplay.classList.add('winner');
                    break;
                default:
                    userImgDisplay.classList.add('tie');
                    computerImgDisplay.classList.add('tie');
            }
        }











        // computerChoice = getComputerChoice();
        // userChoice = getUserChoice();

        // roundWinner = playRound(userChoice, computerChoice);

        // updateScore(roundWinner);

        // displayRoundData();
        // ++roundCounter;

    }


    // displayGameWinner();

    // console.log(`\n`);
    // console.log("If you want to play a new game, call newGame() function from the console: just type newGame(), and don't forget the parenthesis ()")
}
