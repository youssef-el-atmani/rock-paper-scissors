# rock-paper-scissors
[Live Preview](https://youssef-el-atmani.github.io/rock-paper-scissors/)

The goal for this project is to practice coding mainly in basic JS

# The Game PseudoCode
// DECLARE a var named computerChoice, that store randomly one of : ROCK, PAPER, SCISSORS,      initialize it with empty string ""
// DECLARE a var named userChoice, that will store the user choice, and                         initialize it with empty string ""

// DECLARE a var named computerScore, and initialize it with 0
// DECLARE a var named userScore,     and initialize it with 0

// DECLARE a var named roundCounter, and initialize it with 1
// DECLARE a var named roundWinner, and initialize it with empty string: ""

// playGame() function:
//      WHILE roundCounter is less or equal then 5:
//           CALL getComputerChoice(), and store the value in computerChoice
//           CALL getUserChoice(), and store the value in userChoice
//           Compare the user & computer choice, [CALL playRound()], and store the winner in roundWinner var
//           Increase the Score of the winner, [CALL updateScore(roundWinner)]
//           DISPLAY the round winner:
//                       IF it is a tie game
//                           DISPLAY: "ROUND-WINNER: A TIE ROUND"
//                       ELSE IF roundWinner is user:
//                           DISPLAY: "ROUND-WINNER: USER"
//                       ELSE
//                           DISPLAY: "ROUND-WINNER: COMPUTER"
//                       ENDIF
//      
//           Increase the roundCounter by 1
//      END-WHILE
// 
//      IF userScore and computerScore are equal
//      PRINT: "IT IS A TIE GAME"
//      ELSE IF userScore is greater than computerScore
//           PRINT: "YOU'RE THE GAME WINNER"
//      ELSE IF
//           PRINT: "YOU'RE LOST, THE COMPUTER IS THE GAME WINNER"
//      ENDIF
// 
//      DISPLAY a message to inform the user that he could play new game by calling newGame() function from the console
//              "If you want to play a new game, call newGame() function from the console: just type newGame(), and don't forget the parenthesis ()"
// 
// END-playGame()


// ############################################################################################
// THE BELLOW CODE IS ONLY ABOUT FUNCTIONS
// ############################################################################################

// getComputerChoice() function:
//      DECLARE a var named randNumber that store a random number between [0 and 100]
//      IF randNumber is greater than or equal to 0 and less than or equal to 33
//          RETURN "ROCK"
//      ELSE IF randNum is greater than 33 and less than or equal to 66
//          RETURN "PAPER"
//      ELSE
//          RETURN "SCISSORS"
// END-getComputerChoice()


// getUserChoice() function:
//      DECLARE a var named userChoice and initialize it with empty string ""
//      ASK the user for one of: "ROCK, PAPER, SCISSORS", and store the input in userChoice var
//      Transform the user input to upper-case, and store it in userChoice;
//      WHILE userChoice is not equal to one of : "ROCK, PAPER, SCISSORS"
//          DISPLAY: "YOUR weapon in not valid, please choose one of: "ROCK, PAPER, SCISSORS"",
//          Store the user input in userChoice var
//          Transform the user input to upper-case, and store it in userChoice;
//      END-WHILE
//      RETURN userChoice;
// END-getUserChoice()



// playRound(userChoice, computerChoice) function:
//      IF userChoice and computerChoice are the same
//          RETURN "TIE"
//      ELSE IF 
//          userChoice is equal to ROCK and computerChoice is equal to SCISSORS
//          OR userChoice is equal to SCISSORS and computerChoice is equal to PAPER
//          OR userChoice is equal to PAPER and computerChoice is equal to ROCK
//              RETURN "USER"
//      ELSE
//              RETURN "COMPUTER"
// END-playRound()


// updateScore(roundWinner) function:
//      IF roundWinner is a "TIE"
//          DO NOTHING
//      ELSE IF roundWinner is USER
//          Increase userScore by one
//      ELSE
//          Increase computerScore by one
// END-updateScore()

// newGame() function:
//      Clear the console
//      CALL resetGameData();
//      CALL playGame()
// END newGame()

// resetGameData() function:
//      SET computerScore to 0
//      SET userScore to 0
//      SET roundCounter to 1
// END resetGameData()












// #################### NOTE #######################
// I will not need the bellow function since the game will play just once, if the user want to play again, the user could refresh the browser

// I changed my mind, I will use that function, so that I could play the game again and again just from the console


// #################################################


// playGame() function:
//    WHILE roundCounter is less than or equal to 5:
//         CALL getComputerChoice(), and store the value in computerChoice
//         CALL getUserChoice(), and store the value in userChoice
//         Compare the user & computer choice, [CALL playRound()], and store the winner in roundWinner var
//         Increase the Score of the winner, [CALL updateScore(roundWinner)]
//         DISPLAY the round winner:
//                     IF it is a tie game
//                         DISPLAY: "ROUND-WINNER: A TIE ROUND"
//                     ELSE IF roundWinner is user:
//                         DISPLAY: "ROUND-WINNER: USER"
//                     ELSE
//                         DISPLAY: "ROUND-WINNER: COMPUTER"
//                     ENDIF
//    
//         Increase the roundCounter by 1
//    END-WHILE
// 
// 
//    IF userScore and computerScore are equal
//      PRINT: "IT IS A TIE GAME"
//    ELSE IF userScore is greater than computerScore
//      PRINT: "YOU'RE THE WINNER"
//    ELSE IF
//         PRINT: "YOUR LOST, THE COMPUTER IS THE WINNER"
// END-playGame() function
