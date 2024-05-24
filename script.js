const choices = ["Rock", "Paper", "Scissors", "Fuckyou"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 4)];
    let result = "";

    if (playerChoice === computerChoice) {
        result = "Parehas Panalo!";
    } else {
        switch (playerChoice) {
            case "Rock":
                if (computerChoice === "Scissors" || computerChoice === "Fuckyou") {
                    result = "EDI IKAW NA!";
                } else {
                    result = "BOBO!";
                }
                break;
            case "Paper":
                if (computerChoice === "Rock") {
                    result = "EDI IKAW NA!";
                } else {
                    result = "BOBO!";
                }
                break;
            case "Scissors":
                if (computerChoice === "Paper" || computerChoice === "Fuckyou") {
                    result = "EDI IKAW NA!";
                } else {
                    result = "BOBO!";
                }
                break;
            case "Fuckyou":
                if (computerChoice  === "Paper") {
                    result = "EDI IKAW NA!";
                } else {
                    result = "BOBO!";
                }
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");
    if (result === "EDI IKAW NA!") {
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "BOBO!") {
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
