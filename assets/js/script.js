/*Wait till the full page is loaded before running the game.*/
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {

            let difficulty = this.getAttribute("data-type");
            runGame(difficulty);

            if (this.getAttribute("data-type") === "higher") {
                checkInput(userNum, backgroundNum, userInput);
                let highChoice = this.getAttribute("data-type");
                checkInput();

            }
            if (this.getAttribute("data-type") === "lower") {
                checkInput(userNum, backgroundNum, userInput);
                let lowChoice = this.getAttribute("data-type");
                checkInput();
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
    let userInput = checkUserInput(highChoice, lowChoice);
    checkInput(userNum, backgroundNum, userInput)








}
/*Manipulates the DOM and throws the random generated userNum into the span box*/
function displayNum(userNum) {
    document.getElementById("game-num").textContent = `${userNum}`
}
/*check actual answer and check against user answer*/
function checkInput(userNum, backgroundNum, userInput) {


    if (backgroundNum > userNum && userInput === highChoice) {
        alert("You are correct the number displayed is lower than the console number")

    } else {
        alert("You are incorrect the number displayed is higher than the console number")
    }


    if (backgroundNum < userNum && userInput === lowChoice) {
        alert("You are correct the number displayed is higher than the console number")
    } else {
        alert("You are incorrect the number displayed is lower than the console number")
    }

}
/*check user guess and return higher or lower to the userInput variable for the check input function*/
function checkUserInput(highChoice, lowChoice) {
    if (highChoice) {
        return highChoice
    } else if (lowChoice) {
        return lowChoice
    }
}



function addBank() {

}

function takeLife() {

}

function highScore() {

}