// Difficulty settings and their characteristics, assigned when user chooses a difficulty //
let difficultyDataMapper = {
    "easy": {
        "lives": 5,
        "maxNum": 10,
    },
    "medium": {
        "lives": 4,
        "maxNum": 15,
    },
    "hard": {
        "lives": 3,
        "maxNum": 20,
    },
}
let lives = 0; // initially until difficulty is chosen
let score = 0; // starting score
let chosenDifficulty;
let lastNumber;

/*Wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let gameDifficulty = document.getElementsByClassName("game-setting");
    let userAnswer = document.getElementsByClassName("higher_lower_btns");
    for (let button of userAnswer) {
        // RF: Split functions don't have them inline here.
        button.addEventListener("click", higherOrLowerInput);
    }

    for (let button of gameDifficulty) {
        button.addEventListener("click", difficultyChoice);
    }
})

function higherOrLowerInput() {
    if (this.getAttribute("data-type") === "higher") {
        runGame("higher");
    } else if (this.getAttribute("data-type") === "lower") {
        runGame("lower");
    }
}

function difficultyChoice() {
    // Assign lives based on difficulty (easy/medium/hard)
    // Import Difficulty Settings button from DOM and hide them once difficulty is chosen via For loop
    lives = difficultyDataMapper[this.getAttribute("data-type")].lives;
    chosenDifficulty = this.getAttribute("data-type");
    let difficultyButtons = document.getElementsByClassName("game-setting");
    for (let button of difficultyButtons) {
        button.style.display = "none";
    }
    document.getElementById("chosen-difficulty").innerHTML = "You are playing  " + chosenDifficulty;
    document.getElementById("lives").innerHTML = "Your Lives =  " + lives;
    document.getElementById("score-display").innerHTML = "Score =  " + score;

    lastNumber = randomNum();
    displayNum(lastNumber);
}


/*
Generate Random Numbers for each difficulty
*/
function randomNum() {
    return Math.ceil(Math.random() * difficultyDataMapper[chosenDifficulty].maxNum);
}

/*
main rungame function declaring shown number and number for checking higher or lower
*/
function runGame(chosenButton) {
    let nextNumber = randomNum(chosenDifficulty);
    if ((nextNumber > lastNumber && chosenButton == "higher") || (nextNumber < lastNumber && chosenButton == "lower")) {
        score += 1;
        document.getElementById("score-display").innerHTML = "Your Score =  " + score;
        console.log("Correct, increase score")
    } else {
        console.log("Incorrect, decrease life");
        lives -= 1;
        document.getElementById("lives").innerHTML = "Your Lives =  " + lives;
        // TODO: Check if life is 0, game over if so
        if (lives === 0) {
            alert("You are out of lives - Game Over!")

        }
        // Restart
    }
    lastNumber = nextNumber;
    displayNum(lastNumber);
}

/*
Manipulates the DOM and throws the random generated userNum into the span box
*/
function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`
}



function highScore() {}