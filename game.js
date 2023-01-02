let test = 0
    //In the function, start by asking the user if they would like to play the game
function playTheGame() {
    let game = confirm("Please, you would like to play the game ? ")
    if (!game) {
        alert("No problem, Goodbye")

    } else {

        //BONUS =================================================
        //In the First Part, instead of stopping the process
        //if the user didn’ t enter a valid number.Continue asking
        //for a number until the user enters a valid number
        do {
            var number = parseInt(prompt("Please, enter a number between 0 and 10"))
            if (isNaN(number)) {
                alert("Sorry Not a number, Goodbye")

            }

        } while (isNaN(number))
        if (number < 0 || number > 10) {
            alert("Sorry it’ s not a good number, Goodbye")
        } else {
            let computerNumber = Math.round(Math.random() * 10)


            compareNumbers(number, computerNumber)

        }

    }

}

//SECOND PART=====================================================
//Outside of the playTheGame() function, create a new function named
//compareNumbers(userNumber, computerNumber) that takes 2 parameters:
//userNumber and computerNumber

function compareNumbers(userNumber, computerNumber) {
    test++

    if (userNumber == computerNumber) {
        alert("WINNER")
        test = 0

    } else {
        if (userNumber > computerNumber) {
            alert("Your number is bigger then the computer’s, guess again")
        } else {
            alert("Your number is smaller then the computer’s, guess again")

        }
        if (test < 3) {
            playTheGame()
        } else {
            alert("out of chances")
        }

    }

}