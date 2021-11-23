/*Wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "higher") {
                checkInput();
            } else if (this.getAttribute("data-type") === "lower") {
                checkInput();
            } else {
                let difficulty = this.getAttribute("data-type");
                runGame(difficulty);

            }
        });
    }
})

/*Generate Random Numbers for each difficulty*/
function randomNum(userNum) {
    userNum = Math.ceil(Math.random() * 10);
    return userNum

}
/*main rungame function declaring shown number and number for checking higher or lower*/
function runGame(difficulty) {
    let userNum = randomNum(difficulty);
    displayNum(userNum);
}

function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`
}

function checkInput() {

}

function addBank() {

}

function takeLife() {

}

function highScore() {

}