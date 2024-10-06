once the user clicks on of the buttons: "rock, paper, ..."
    IF the scores are less than "5"
        Update the gameStatus:
            "The battle is ON"
        <!-- Store the userChoice -->
        <!-- Get the computerChoice & Store it -->
        <!-- Compare the weapons & Store the roundWinner -->
        <!-- Update the score of the roundWinner -->
        <!-- Display the score -->
        IF one of the scores is equal to "5"
            <!-- Store the gameWinner -->
            <!-- Display the *Trophy* for the winner -->
            <!-- Display the BrokenHeart for the looser -->
            <!-- Display a message in the GameStatus for the user:
                -> If user is the winner:
                    "Congratulations: You're the Winner!!"
                -> Else
                    "Don't Give Up: You'll win another time!!" -->
        ENDIF
        ELSE:
        <!-- Display the userChoice -->
        Display the computerChoice
        Style the the displayed Images
            RoundWinner:    BiggerImg and Green background
            RoundLooser:    SmallerImg and Red Background
            TieRound   :    Same size & same gray background for both
        ELSE-END
    END-IF

    IF reset button is clicked
        display sand-clock image for both: User & computer
        reset both scores to "0"
        reset the gameStatus to "Waiting for game to start ..."
        

        
