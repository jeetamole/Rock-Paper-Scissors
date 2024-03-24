// Prevent animation on load

setTimeout(() => {
    document.body.classList.remove("preload");
}, 500);

//DOM
let btnRules = document.querySelector(".rules-btn");
let btnClose = document.querySelector(".close-btn");
let rulesContainer = document.querySelector(".rules-container");

let CHOICES = [
    {
        name: "paper",
        beats: "rock"
    },
    {
        name: "scissors",
        beats: "paper"
    },
    {
        name: "rock",
        beats: "scissors"
    }
]

let gameDiv = document.querySelectorAll('.game');
let choiceButtons = document.querySelectorAll('.choice-btn');
let resultsDiv = document.querySelectorAll('.results');
let resultDivs = document.querySelectorAll('.results-result');
let resultWinner = document.querySelector(".results-winner");
let resultText = document.querySelector(".results-text");

const playAgainBtn = document.querySelector(".play-again");

const scoreNumber = document.querySelector(".score-num");
let score = 0;

// *********************Game Logics****************************************
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let choiceName = button.dataset.choice;
        let choice = CHOICES.find((choice) => choice.name === choiceName);
        choose(choice);
    });
});

function choose(choice) {
    let aichoice = aiChoose();
    displayResults([choice, aichoice]);
    displayWinner([choice, aichoice]);
}

function aiChoose() {
    let rand = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[rand];
}

function displayResults(results) {
    resultDivs.forEach((resultDiv, idx) => {
        setTimeout(() => {
            resultDiv.innerHTML = `
          <div class="choice ${results[idx].name}">
            <img src="img/icon-${results[idx].name}.png" alt="${results[idx].name}" />
          </div>
        `;
        }, idx * 1000);
    });
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
}

function displayWinner(results) {
    setTimeout(() => {
        let userWins = isWinner(results)
        let pcWins = isWinner(results.reverse());

        if (userWins) {
            resultText.innerText = "you win"
            resultDivs[0].classList.toggle("winner")
        } else if (pcWins) {
            resultText.innerText = "you lose"
            resultDivs[1].classList.toggle("winner")
        } else {
            resultText.innerText = "draw"
        }
        resultWinner.classList.toggle("hidden");
        resultsDiv.classList.toggle("show-winner");
    }, 1000);

}

function isWinner(results) {
    return results[0].beats === results[1].name;
  }
  
  function keepScore(point) {
    score += point;
    scoreNumber.innerText = score;
  }
  
  // Play Again
  playAgainBtn.addEventListener("click", () => {
    gameDiv.classList.toggle("hidden");
    resultsDiv.classList.toggle("hidden");
  
    resultDivs.forEach((resultDiv) => {
      resultDiv.innerHTML = "";
      resultDiv.classList.remove("winner");
    });
  
    resultText.innerText = "";
    resultWinner.classList.toggle("hidden");
    resultsDiv.classList.toggle("show-winner");
  });
  
// Show & Hide 
btnRules.addEventListener("click", () => {
    rulesContainer.classList.toggle('show-rules')
})
btnClose.addEventListener("click", () => {
    rulesContainer.classList.toggle('show-rules')
})


