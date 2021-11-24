/*Wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "higher") {
                alert("Please choose a difficulty");
            } else if (this.getAttribute("data-type") === "lower") {
                alert("Please choose a difficulty");
            } else {
                let difficulty = this.getAttribute("data-type");
                runGame(difficulty);

            }
        });
    }
})

/*Generate Random Numbers for each difficulty*/
function randomNum(difficulty) {
    if (difficulty == "easy") {
        userNum = Math.ceil(Math.random() * 10);
        backgroundNum = Math.ceil(Math.random() * 10);
    } else if (difficulty == "medium") {
        userNum = Math.ceil(Math.random() * 15);
        backgroundNum = Math.ceil(Math.random() * 15);
    } else if (difficulty == "hard") {
        userNum = Math.ceil(Math.random() * 20);
        backgroundNum = Math.ceil(Math.random() * 20);

    }

    return userNum
    return backgroundNum


}
/*main rungame function declaring shown number and number for checking higher or lower*/
function runGame(difficulty) {
    let userNum = randomNum(difficulty);
    displayNum(userNum);
    console.log("GAME IS RUNNING");
    let backgroundNum = randomNum(difficulty);


}
/*Manipulates the DOM and throws the random generated userNum into the span box*/
function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`
}

function checkInputHigher(userNum, backgroundNum) {
    if (userNum > backgroundNum) {
        addBank();
        console.log("you have guessed correctly");
    }
}

function checkInputLower() {

}

function addBank() {

}

function takeLife() {

}

function highScore() {

}