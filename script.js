//DOM

const btnRules =  document.querySelector(".rules-btn");
const btnClose = document.querySelector(".close-btn");
const rulesContainer = document.querySelector(".rules-container");

// Show & Hide 
btnRules.addEventListener("click", () => {
    rulesContainer.classList.toggle('show-rules')
})
btnClose.addEventListener("click", () => {
    rulesContainer.classList.toggle('show-rules')
})

//UserPicked options
let userpickedRock = document.getElementById('rockbtn');
let userpickedPaper =  document.getElementById('paperbtn');
let userpickedScissor = document.getElementById('scissorbtn');


userpickedRock.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Rock.png" alt="Rock" srcset="">`;

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area');
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';
    showRound.style.marginTop = '-330px';

    let showTitle = document.getElementById('match-title');
    showTitle.style.display = 'flex';

    let winbox = document.getElementById('win-box')
    winbox.style.display = 'block'

    play()
})

userpickedPaper.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Paper.png" alt="Paper" srcset="">`;

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area');
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';
    showRound.style.marginTop = '-330px';

    let showTitle = document.getElementById('match-title');
    showTitle.style.display = 'flex';

    let winbox = document.getElementById('win-box')
    winbox.style.display = 'block'

    play()
})


userpickedScissor.addEventListener('click', ()=>{
    let displayElement = document.getElementById('you-picked');
    displayElement.innerHTML = `<img src="Images/Scissor.png" alt="Scissor" srcset="">`;

    let options = document.getElementById('options');
    options.style.display = 'none';

    let showRound = document.getElementById('match-area');
    showRound.style.display = 'flex';
    showRound.style.justifyContent = 'space-around';
    showRound.style.marginTop = '-330px';

    let showTitle = document.getElementById('match-title');
    showTitle.style.display = 'flex';

    let winbox = document.getElementById('win-box')
    winbox.style.display = 'block'

    play()
})


//computer selects/picks the random button rock, paper or scissor
let compicked = ['Rock', 'Paper', 'Scissor'];

    compickedIndex = Math.floor(Math.random()* compicked.length);

    let comDisplay = document.getElementById('Pc-picked');
    let compickedRandom = compicked[compickedIndex];

    if(compickedRandom == 'Rock'){
        comDisplay.innerHTML = '<img src="Images/Rock.png" alt="Rock" srcset="">';
    }else if(compickedRandom == 'Paper'){
        comDisplay.innerHTML = '<img src="Images/Paper.png" alt="Paper" srcset="">';
    }else if(compickedRandom == 'Scissor'){
        comDisplay.innerHTML = '<img src="Images/Scissor.png" alt="Scissor" srcset="">';
    }


// Function to see who is the winner, loser or the game is tie & display scores for user & comp
let userScore = 0;
let compScore = 0;

//adding the green background for the winner
let userWinnerBackground ;
let compWinnerBackground;

//Next btn when the user wins the round
let nextButton = document.getElementById('Next-btn');

function play() {
    let playerPicked = document.getElementById("you-picked").querySelector('img').alt;

    let userScoreDisplay = document.getElementById('User-Score-display');
    let compScoreDisplay = document.getElementById('Comp-Score-display');

    let userWinnerBackground = document.getElementById('user-Winner-Background');
    let compWinnerBackground = document.getElementById('comp-Winner-Background');

    let resultElement = document.getElementById('result');
    let playbuttonTextChange = document.getElementById('play-again');

    if (playerPicked === compickedRandom) {
        resultElement.innerText = "TIE";
        playbuttonTextChange.innerText = "REPLAY";
    } else if (
        (playerPicked === 'Rock' && compickedRandom === 'Scissor') ||
        (playerPicked === 'Paper' && compickedRandom === 'Rock') ||
        (playerPicked === 'Scissor' && compickedRandom === 'Paper')
    ) {
        resultElement.innerHTML = `YOU WIN <br> <span class="txt">AGAINST PC</span>`;
        userScore++;
        userWinnerBackground.style.opacity = "100";
        nextButton.style.display = 'inline-flex';
    } else {
        resultElement.innerHTML = `YOU LOST <br> <span class="txt">AGAINST PC</span>`;
        compScore++;
        compWinnerBackground.style.opacity = "100";
    }

    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;

    saveScore();
}


//function to display the Winner's/Trophy Page  

nextButton.addEventListener('click', ()=>{
    let container = document.querySelector('.container')
    container.style.display ='none';

    let showWinnerPage = document.getElementById('Winner-page')
    showWinnerPage.style.display = 'block';

    let displayRulebtn = document.getElementById('Rules-btn')
    displayRulebtn.style.display = 'block';
});


//rule button for winners page

let ruleButtonWinnerPage = document.getElementById('Rules-btn-win-page')
let cancelButtonWinnerPage = document.getElementById('cancel-btn-two')

ruleButtonWinnerPage.addEventListener('click',()=>{
    let rulesBoxWinnerPage = document.getElementById('rules-box-winner-page');
    console.log('rule button clicked');
    rulesBoxWinnerPage.style.display = 'block';
})
cancelButtonWinnerPage.addEventListener('click',()=>{
    let rulesBoxWinnerPage = document.getElementById('rules-box-winner-page');
    console.log('cancel button clicked');
    rulesBoxWinnerPage.style.display = 'none';
})


//play again & Replay button function

let playagain = document.getElementById('play-again');

playagain.addEventListener('click',()=>{
    location.reload();
    saveScore();
})

//play again button function winner page

let playagainwinnerPage = document.getElementById('play-again-btn-win-page');

playagainwinnerPage.addEventListener('click',()=>{
    location.reload();
    saveScore();
})


// function to save scores in localstorage

function saveScore(){
    localStorage.setItem('userScore', userScore);
    localStorage.setItem('compScore', compScore);
}

function showScore(){
    let userScoreDisplay = document.getElementById('User-Score-display');
    let compScoreDisplay = document.getElementById('Comp-Score-display');

    userScore = parseInt(localStorage.getItem('userScore')) || 0;
    compScore = parseInt(localStorage.getItem('compScore')) || 0;

    userScoreDisplay.innerText = userScore;
    compScoreDisplay.innerText = compScore;
} 

window.onload = function () {
    showScore();
}