let game_items = ["✊", "✋", "✌️"];
let playerScore = 0;
let computerScore = 0;


// Change item picked image
function computeIndex(clickedId) {
  let pickedindex = 0;
  if (clickedId === "rock") {
    pickedindex = 0;
  } else if (clickedId === "paper") {
    pickedindex = 1;
  } else {
    pickedindex = 2;
  }
  return pickedindex;
}

// Random computer value
let randomIndex = 0;
function getComputerPick() {
  const options = ["rock", "paper", "scissors"];
  randomIndex = Math.floor(Math.random() * options.length);
  const clickedId = options[randomIndex];
  document.getElementById("selectedImage-computer").innerHTML =
    game_items[randomIndex];
  return clickedId;
}

// Check winner
function checkWinner(playerPick, computerPick) {  
  if (playerPick === computerPick) {
    document.getElementById("show-winner").innerHTML = "Draw";
  } else if (
    (playerPick === "rock" && computerPick === "scissors") ||
    (playerPick === "paper" && computerPick === "rock") ||
    (playerPick === "scissors" && computerPick === "paper")
  ) {
    document.getElementById("show-winner").innerHTML = "Player win";
    playerScore++;
    document.getElementById("player-score").innerHTML = playerScore;
  } else {
    document.getElementById("show-winner").innerHTML = "Computer wins";
    computerScore++;
    document.getElementById("computer-score").innerHTML = computerScore;
  }
}


const clickedButtons = document.querySelectorAll(".option");
clickedButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const clickedId = event.currentTarget.id;

    document.getElementById("selectedImage-player").innerHTML =
      game_items[computeIndex(clickedId)];

    // Get computer choice
    const computerPick = getComputerPick();

    // Determine winner
    checkWinner(clickedId, computerPick);

  });
});

window.addEventListener("DOMContentLoaded", () => {
  getComputerPick(); 
  document.getElementById("selectedImage-player").innerHTML = game_items[randomIndex];
  document.getElementById("show-winner").innerHTML = "Currently Draw";
});
