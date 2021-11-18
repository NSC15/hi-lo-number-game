document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "easy") {
                runGame1()
                console.log("running game 1")
            }
            if (this.getAttribute("data-type") === "medium") {
                runGame2()
                console.log("running game 2")
            }
            if (this.getAttribute("data-type") === "hard") {
                runGame3()
                console.log("running game 3")
            }

        });
    }
})

function runGame1() {

}

function runGame2() {

}

function runGame3() {

}

function calculateCorrectAnswer() {

}

function checkAnswer() {

}

function addBank() {

}

function takeLife() {

}

function highScore() {

}