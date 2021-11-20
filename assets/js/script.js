/*wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkInput();
            } else {
                let difficulty = this.getAttribute("data-type");
                runGame(difficulty);
            }
        });
    }
})



function runGame(difficulty) {
    /*create random numbers for each game difficulty, run game difficulty based on user click*/
    let easyNum = Math.floor(Math.random() * 10);
    let medNum = Math.floor(Math.random() * 15);
    let hardNum = Math.floor(Math.random() * 20);

    if (diffculty === "easy") {
        runGame1()
    } else if (difficulty === "medium") {
        runGame2()
    } else if (difficulty === "hard") {
        runGame3()
    }
}

function runGame1(easyNum) {};

function runGame2(medNum) {};

function runGame3(hardNum) {};

function calculateCorrectAnswer() {

}

function checkInput() {

}

function addBank() {

}

function takeLife() {

}

function highScore() {

}