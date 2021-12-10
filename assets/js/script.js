/* 
Difficulty settings and their characteristics, assigned when user chooses a difficulty
*/
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
};
let lives = 0; // initially until difficulty is chosen
let score = 0; // starting score
let chosenDifficulty;
let lastNumber;
const highScores = JSON.parse(localStorage.getItem("highScores")) || []; //highscore variable
const highScoreDisplay = document.getElementById("highScoreDisplay"); //highscore display variable
/*
numerically sort highscores from low to high then reverse so highest is index 0.
if array is empty set highscores inner html
else display users high score taken from local storage
*/
highScores.sort((function (a, b) {
    return a - b
}));
highScores.reverse();
if (highScores.length === 0) {
    highScoreDisplay.innerHTML = "You currently have no High Scores logged"
} else {
    highScoreDisplay.innerHTML = "Your High Score is -  " + highScores[0];
}
/*
Wait till the full page is loaded before running the game.
*/
document.addEventListener("DOMContentLoaded", function () {
    let gameDifficulty = document.getElementsByClassName("game-setting");
    let userAnswers = document.getElementsByClassName("higher_lower_btns");
    for (let button of userAnswers) {
        button.addEventListener("click", higherOrLowerInput);
        button.style.visibility = "hidden";
    }
    for (let button of gameDifficulty) {
        button.addEventListener("click", difficultyChoice);
    }
    //document.getElementById("HighScoreDisplay").innerHTML = "You currently have no High Scores logged";
});
/* 
Runs game with value of user input e.g Guessed Higher or Lower and gives that value to the runGame function
*/
function higherOrLowerInput() {
    if (this.getAttribute("data-type") === "higher") {
        runGame("higher");
    } else if (this.getAttribute("data-type") === "lower") {
        runGame("lower");
    }
}

function difficultyChoice() {
    /* Assign lives based on difficulty (easy/medium/hard)
    Import Difficulty Settings button from DOM and hide them once difficulty is chosen via For loop
     */
    lives = difficultyDataMapper[this.getAttribute("data-type")].lives;
    chosenDifficulty = this.getAttribute("data-type");
    let difficultyButtons = document.getElementsByClassName("game-setting");
    for (let button of difficultyButtons) {
        button.style.display = "none";
    }
    document.getElementById("chosen-difficulty").innerHTML = "You are playing  " + chosenDifficulty;
    document.getElementById("lives").innerHTML = "Your Lives =  " + lives;
    document.getElementById("score-display").innerHTML = "Score =  " + score;
    document.getElementsByClassName("higher_lower_btns")[0].style.visibility = 'visible';
    document.getElementsByClassName("higher_lower_btns")[1].style.visibility = 'visible';
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
        console.log("Correct, increase score");
        document.getElementById("equalNum").style.visibility = "hidden";
    } else if (nextNumber === lastNumber) {
        score += 0;
        lives += 0;
        document.getElementById("equalNum").innerHTML = "oops, your number is equal. Press Higher or Lower to Continue";
        document.getElementById("equalNum").style.visibility = "visible";

    } else {
        console.log("Incorrect, decrease life");
        lives -= 1;
        document.getElementById("lives").innerHTML = "Your Lives =  " + lives;
        document.getElementById("equalNum").style.visibility = "hidden";
    }
    if (lives === 0) {
        gameOver(score);
    }
    lastNumber = nextNumber;
    displayNum(lastNumber);
}
/*
Game over function opening a modal notifying the user, pointing the user towards clicking restart,
 which calls the restart game function

*/
function gameOver(score) {
    let endGameModal = document.getElementById("game-over-modal");
    endGameModal.style.display = "block";
    document.getElementById("restart-game").addEventListener("click", restartGame);
    highScores.push(score);
    localStorage.setItem('highScores', JSON.stringify(highScores));
}
/*
restarts game via page refresh (highscores still saved in local storage)
*/
function restartGame() {
    location.reload();
}
/*
Manipulates the DOM and throws the random generated userNum into the span box
*/
function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`;
}