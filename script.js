let currentPlayer = "X";
let cells = document.querySelectorAll(".cell");
let winnerDisplay = document.getElementById("winner");
let resetButton = document.getElementById("reset");

// New screen elements
let overlay = document.querySelector(".overlay");
let resultScreen = document.querySelector(".result-screen");
let resultMessage = document.getElementById("result-message");
let newGameButton = document.getElementById("new-game");

// Event listeners for each cell
cells.forEach((cell) => {
    cell.addEventListener("click", cellClick);
});

// Event listener for the reset button
resetButton.addEventListener("click", resetGame);

// Event listener for the New Game button
newGameButton.addEventListener("click", startNewGame);

function cellClick(e) {
    const cell = e.target;

    if (!cell.textContent) {
        cell.textContent = currentPlayer;
        if (checkForWinner()) {
            showResult(`Player ${currentPlayer} wins!`);
        } else if (isBoardFull()) {
            showResult("It's a draw!");
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkForWinner() {
    // ... (same as before)
}

function isBoardFull() {
    return [...cells].every((cell) => cell.textContent !== "");
}

function resetGame() {
    cells.forEach((cell) => {
        cell.textContent = "";
        cell.addEventListener("click", cellClick);
    });
    currentPlayer = "X";
    winnerDisplay.textContent = "";
    hideResult();
}

function showResult(message) {
    resultMessage.textContent = message;
    overlay.style.display = "block";
    resultScreen.style.display = "block";
}

function hideResult() {
    overlay.style.display = "none";
    resultScreen.style.display = "none";
}

function startNewGame() {
    hideResult();
    resetGame();
}

// Initialize the game
resetGame();
