// declare some global variables
let player = "";
let playerCount = 0;
let computerCount = 0;
let drawCount = 0;

// Function: Generates proper random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Function: return random string from an array
//            using random generator function
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    let index = getRndInteger(0, 3);
    return choice[index];
}

// Function: Play one round of rock paper scissor
//         : between computer(randomly generated) and player
function playRound(player, computer) {

    if (player === computer)
        return 3;

    else if (player === "rock") {
        if (computer === "paper")
            return 2;
        else if (computer === "scissors")
            return 1;
    }

    else if (player === "paper") {
        if (computer === "scissors")
            return 2;
        else
            return 1;
    }

    else {
        if (computer === "paper")
            return 1;
        else
            return 2;
    }
}
// Function: Plays three rounds of rock paper scissor
//         : And Announces the winner to the screen
function playThreeRounds() {

    // Game resets after each one won
    if (playerCount === 3 || computerCount === 3) {
        if (computerCount === 3) {
            h1.innerText = "COMPUTER WON";
        }
        if (playerCount === 3) {
            h1.innerText = "YOU WON";
        }
        h1.style.display = "inline";
        // Reverse the count to 0;
        playerCount = drawCount = computerCount = 0;
        return;
    }
    // Remove the winner of last game from display
    h1.style.display = "none";

    player = player.toLowerCase();
    computer = getComputerChoice();

    // Play One Round
    let result = playRound(player, computer);
    (result === 1) ? playerCount++ :
    (result === 2) ? computerCount++ :
                     drawCount++;
}

// Create 3 buttons
let btnRock = document.createElement('button');
let btnPaper = document.createElement('button');
let btnScissors = document.createElement('button');

// Add inner text
btnRock.innerText = "Rock";
btnPaper.innerText = "Paper";
btnScissors.innerText = "Scissors";

// Add event Listner for each button
btnRock.addEventListener('click', function (e) {
    player = e.target.innerText;
    playThreeRounds();
});
btnPaper.addEventListener('click', function (e) {
    player = e.target.innerText;
    playThreeRounds();
});
btnScissors.addEventListener('click', function (e) {
    player = e.target.innerText;
    playThreeRounds();
});



// Create div and append all buttons to it
let h1 = document.createElement('h1');
h1.innerText = "Player Won";
h1.style.display = "none";

let div = document.createElement('div');
div.append(btnRock, btnPaper, btnScissors, h1);


// Display the buttons
document.body.append(div)


// Styling: container for buttons
div.style.cssText = `
    width: 300px;
    margin: auto;
    margin-top: 30px;
    display: flex;
    flex-direction: column;   
    gap: 5px;
`

// Styling: buttons
let btns = document.querySelectorAll('button');
btns.forEach(styleButtons);
function styleButtons(btn) {
    btn.style.cssText = `
        background-color: burlywood;
        border-radius: 18px;
        color: drakslategrey;
        font-size: 40px;
        height: 70px;
    `
}