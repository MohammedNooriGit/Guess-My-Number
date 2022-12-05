"use strict";

let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  let guessValue = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (!guessValue) {
      displayMessage("🔴 Please enter a number.");
    } else if (guessValue === randomNumber) {
      displayMessage("🎉 Guess is correct.");
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").textContent = randomNumber;

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }
    } else {
      guessValue > randomNumber
        ? displayMessage("📈 Guess is too high.")
        : displayMessage("📉 Guess is too low.");
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    displayMessage("😱 You lose.");
    document.querySelector(".score").textContent = 0;
    document.querySelector("body").style.backgroundColor = "red";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = `${score}`;
  document.querySelector(".guess").value = "";
});
