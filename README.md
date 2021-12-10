# Hi-Lo Number Game

## Live Link - <https://nsc15.github.io/hi-lo-number-game/>

![responsive game image](assets/images/responsive-game.webp)

## Background

The Hi-Lo Number game is my Milestone Two JavaScript Project. I have used HTML / CSS and Javascript in the creation of this. The aim of the game is to achieve the highest score you can by correctly guessing if the following number is going to be Higher or Lower, based on a traditional arcade scenario. The user is able to choose from three difficulty settings which each have different characteristics, for example Easy mode you have five lives to start with but Hard mode you will only have three. Upon losing all your lives, the game will then give you the option to restart.

## User Experience (UX)

### User Story & Target Audience

#### First Time Visitor Goals

- I want to be able to access the game instructions
- I want to be able to clearly understand how to being the game
- I want to be able to see what scores i have got in previous rounds of playing the game.

#### Target Audience

- The Target Audience for this game is aimed at but not limited to children and young adults. This game doesnt really include educational material but aims more to gain the users attention by the essence of chance that the game possesses. The old saying 'sometimes less is more' is key here with the simplistic design and its basic gameplay but its potential ability to attract peoples attention and competitive streak.

## Design

### Colour Scheme

- This project's main colour scheme consists of Green (To emulate an arcade board game feeling)
- Grey / White and Black for the plain and effective constrast.

![game colours used](assets/images/game-colours.webp)

### Font

- Source = Google Fonts

- I have used the font 'Permanent Marker' with a back up of Sans-Serif for this game. The bold and stylish aesthetics of this font work brilliantly with the game design.

### Layout of the Game

### The landing page of the game - Awaiting User choosing a difficulty

- ![game landing page](assets/images/game-main.webp)

### The games instructions modal, accessable through the blue question mark button

- ![instructions modal](assets/images/game-instructions.webp)

### The user has now chosen a difficulty and been assigned lives, score set to 0, number generated and Higher or Lower control buttons are now visible

- ![difficulty chosen](assets/images/game-difficulty.webp)

### The action of the game, lives and score updated depending on user performance

- ![game inplay ](assets/images/game-inplay.webp)

### The game over modal with the Restart button to replay the game

- ![gameover modal](assets/images/game-gameover.webp)

### WireFrames

- As evident through the wireframe, the design for this game is one of simplicity, with the clear focal point being the game controls (Higher or Lower Buttons) and the random number placeholder box. I have chosen the green background in an attempt to emulate an old school arcade board game feel.

![project planning wireframe](assets/images/game-wireframe.webp)

## Features

- Responsive to 320px
- Custom CSS / HTML
- Custom Javascript front end DOM manipulation
- Custom Javascript back end functions
- Scoring System
- Game over feedback

## Functions

- HighScore (Global) - An Array (highScores) is accessible through local storage and the highScoreDisplay is then called within the HighScore modal when the user clicks the HighScores button. The actual highscore data addition is handled with the gameOver function however the array is handled globally by sorting into numerical order (highest - lowest). If the array is empty the DOM manipulates the span with the modal to say There is no high scores logged, however once there is scores to work with the highest is then displayed for the user to see, which will be stored until a deletion of the local storage.

- DOMContentLoaded Initial Function - This function is assigning variables gameDifficulty and userAnswers to the buttons classes of the difficulty buttons and the higher or lower buttons. Alongside this the Higher or Lower buttons visibility is hidden while a difficulty isnt chosen. Once a difficulty is clicked, this then runs the difficultyChoice function.

- higherorLowerInput - This function is determining which game function to run based on the user guessing Higher or Lower. If user clicked higher then runGame with the Higher result to give a comparison argument to further functions to determine if the user is correct or incorrect.

- difficultyChoice - Function grabs the lives data from the data array dependant which difficulty is chosen and assigns this to the users lives value. It also sets the difficulty buttons visibility to hidden once a difficulty is chosen and then displays text which tells the user "You are playing difficulty ...". Finally, this function also sets the users score to 0 in readiness to playing the game.

- randomNum - This function returns a number between 1 and then the max number property of whichever difficulty is chosen for example... Easy will generate a number between 1 and 10.

- runGame - This is the main body of the game to determine if the users answer is correct and then feedback with either an incrementation of 1 to the score if the answer is correct or by decreasing the lives by 1 if the users answer is incorrect. Due to 2 random numbers being generated for the game, there is a chance that these numbers are going to be equal so the original if statement is extended to say if both numbers are equal the score and lives in unaffected and advises the user to click to continue to re-generate numbers. Finally, once the lives get down to 0 the runGame function then calls the gameOver function.

- gameOver - This function essentially calls the gameOver modal onto the display to prompt the user that the game is over and to click the restart button to restart, which in turn calls the gameRestart function. This function also pushes the end score to the highScores array for storage into the local storage.

- gameRestart - This function utilises the location.reload tool, to bring the game back to the start and require the user to pick their difficulty setting then replay.

## Future Improvements

- Username creation and scores log

- Multiplayer options

## Technologies

- HTML - Used for the games main structure.
- CSS - Used for the games styling.
- Bootstrap - Grid system for structure, preset modal class for instructions and game over modals.
- Google Fonts - Provider of Permanent Marker font.
- Javascript - Used for Front end DOM Maniupulation and the games main back end functions.
- Balsamiq WireFrames - Project planning tool for visual design.
- Github - Gitpod store and deployment utility
- Gitpod - Project IDE
- Git - Version Control which passes data through to Github for storing and deploying as finished project.

## Automatic Testing & Validation

- W3C HTML Validator - HTML code validated with no errors.
- W3C Jigsaw CSS Validator - CSS code validated with no errors.
- JSHint - Javascript code validated with no errors.
- Lighthouse
- ![lighthouse performance report](assets/images/lighthouse.webp)

## Manual Testing & Bugs

- As evident through the commit history, the initial coding strategy to get to my desired output was long-winded and over complicated - Key mentor sessions to re-write code in a more efficient way with same desired output. For example using an Array with each level with the lives and the max number assigned to them which can be accessed within further functions.
- Dev Tools was used throughout the project development utilising console logs to see desired output is achieved before moving on to next functions.
- Manual Device Testing - I used personal desktop pc's aswell as phones and tablets to assess the games responsiveness while developing.
- Manual testing scenarios -

- Pick a difficulty - I chose each difficulty and tested that a number was generated. Passed.
- User Choice - I set up a console log to output my choice i.e if the higher button was clicked log "You chose higher" and the same for lower. Passed
- Click higher or lower upon game loading - No action?! This made me realise in the process of my game i want the user to choose a difficulty so that it will call the random number function so to fix this i added into the initial content loaded function that the visibility CSS would be hidden. Once the difficulty choice function was called the visibility CSS of the higher or lower buttons was then visible. Bug Fixed.
- What is happening if the random numbers generated are both the same? No user feedback and the user lost a life (Bug) - I adapted the main if statement for correct / incorrect answers to say if the numbers were equal display a span saying so and prompt the user to re-click higher or lower to continue, without losing a life or gaining score. Bug Resolved!
- Highscore Display, is the modal showing my highest score? Initially i had coded the array to sort the scores and then output it to the modal, however it was showing the lowest score (making the user look bad...). To Fix this i outputted the array to the console and noticed the array was sorted numerically but from lowest to highest and my code is showing index [0] on the array, which led me to add .reverse meaning the highest number would be index[0] resulting in the users actual High Score being shown.

## Deployment

### My Project Deployment

- This project is Deployed via GitHub Pages
- My project was created in Gitpod
- Git was used for Version Control
- My project was deployed once i started testing via multiple devices and regularly updated when i pushed from Git.

### GitHub Pages Deployment

- To deploy via GitHub Pages -
- Log in to GitHub with your personal account
- Locate and Choose your repository you wish to deploy
- Access setting at the far-right of the repository control bar (not the top of webpage)
- Scroll down and click 'Pages'
- Under 'Source' you will find a dropdown to set your branch to 'main'
- Once this is done, wait a minute or so and refresh your page
- You should then see a section telling you your site has been published and a clickable link to access it.

## Forking a Repository

- Forking is a good utility to use to make a copy of an original repository so that this can be edited without making any changed to the original development repository.

- Locate a repository you wish to copy
- The Fork button is above the repository control bar to the right.
- Once clicked this will then create the repository copy to your Github account.

## Cloning a Repository

- You can clone a repository straight to Gitpod if needed.

- Locate a repository you wish to clone
- Just below the repository control bar, there is a green Gitpod button.
- This will then open the project in Gitpod for you (if gitpod is installed).

## Credits

- Reuben Ferrante - CI Mentor for code expertise and project planning
- Bootstrap - Use of Grid System and Modals
- Google Fonts - Permanent Marker Font
- Slack Community - In particular Dave Horrocks for answering any issues along the way to completing the project
