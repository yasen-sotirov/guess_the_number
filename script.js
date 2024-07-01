"use strict";

let secretNum = Math.trunc(Math.random() * 100) + 1;
let score = 10;
let highScore = 0;

// functions
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}

function checkScore() {
  displayMessage("💥 You lost!");
  document.querySelector("body").style.backgroundColor = "#b21919";
  document.querySelector(".score").textContent = 0;
}

// game logic
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // where there is no input
  if (!guess) {
    displayMessage("❌ No number");
  }

  // when player win
  else if (guess === secretNum) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNum;

    // highscore counter
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }

  // when guess is too high
  else if (guess > secretNum) {
    if (score > 1) {
      displayMessage("🔼 Too high!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      checkScore();
    }
  }

  // when guess is too low
  else if (guess < secretNum) {
    if (score > 1) {
      displayMessage("🔽 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      checkScore();
    }
  }
});

// RESET BUTTON
document.querySelector(".again").addEventListener("click", function () {
  secretNum = Math.trunc(Math.random() * 100) + 1;
  score = 10;
  document.querySelector("body").style.backgroundColor = "#272727";
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("number").style.width = "15rem";
});

// Enter btn
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.querySelector(".check").addEventListener("click", function () {
      const guess = Number(document.querySelector(".guess").value);
    });
  }
});
