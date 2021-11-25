/*Wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("game-setting");
    let controls = document.getElementsByClassName("controls");
    for (let button of controls) {
        button.addEventListener("click", function () {

            if (this.getAttribute("data-type") === "higher") {
                let userInput = "higher"
                checkUserInput(userInput);
                checkInput(runGame);

                console.log("you guessed higher");


            } else if (this.getAttribute("data-type") === "lower") {
                userInput = "lower"
                checkUserInput(userInput)
                console.log("you guessed lower");
                checkInput(runGame);


            }


        });
    }
    for (let button of buttons) {
        button.addEventListener("click", function () {

            let difficulty = this.getAttribute("data-type");
            runGame(difficulty);

            if (this.getAttribute("data-type") === "easy") {
                difficulty = "easy"
                console.log("you chose easy");
            } else if (this.getAttribute("data-type") === "medium") {
                difficulty = "medium"
                console.log("you chose medium")
            } else if (this.getAttribute("data-type") === "hard") {
                difficulty = "hard"
                console.log("you chose hard");
            }


        });
    }
})

/*Generate Random Numbers for each difficulty*/
function randomNum(difficulty) {
    if (difficulty == "easy") {
        userNum = Math.ceil(Math.random() * 10);

    } else if (difficulty == "medium") {
        userNum = Math.ceil(Math.random() * 15);

    } else if (difficulty == "hard") {
        userNum = Math.ceil(Math.random() * 20);


    }

    return userNum



}
/*main rungame function declaring shown number and number for checking higher or lower*/
function runGame(difficulty) {
    let userNum = randomNum(difficulty);
    displayNum(userNum);
    let backgroundNum = randomNum(difficulty);
    console.log(backgroundNum)
    checkInput(userNum, backgroundNum)


}
/*Manipulates the DOM and throws the random generated userNum into the span box*/
function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`
}
/*check actual answer and check against user answer*/
function checkInput(userNum, backgroundNum) {
    if (userNum > backgroundNum) {
        console.log("answer is lower")
    } else if (userNum < backgroundNum) {
        console.log("answer is higher")
    }

}
/*check user guess and return higher or lower to the userInput variable for the check input function*/
function checkUserInput(userInput, answer) {
    checkInput(userInput);
    console.log("i am checking your guess to see if it matches the answer")
    checkInput(userInput);

}



function addBank() {

}

function takeLife() {

}

function highScore() {

}