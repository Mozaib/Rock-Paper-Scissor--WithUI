function computerPlay(){ 
    let rpsChoices = ['rock', 'paper', 'scissor'];
    return rpsChoices[Math.floor(Math.random() * 3)]
}

    
let playRound = function(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        switch (computerSelection) {
        case 'rock':
            console.log("draw")
            break;
        case 'paper':
            console.log('compPoint')
            return;
        case 'scissor':
        console.log('playPoint')
            return;
            
        }
    } else if (playerSelection === 'paper') {

        switch (computerSelection) {
        case 'paper':
        console.log('draw');
            break;
        case 'scissor':
        console.log('compPoint');
            return;
        case 'rock':
        console.log('playPoint');
            return;
        }
    } else if (playerSelection === 'scissor') {

        switch (computerSelection) {
        case 'scissor':
        console.log('draw');
            break;
        case 'rock':
        console.log('compPoint');
            return;
        case 'paper':
        console.log('playPoint');
            return;
        }
    }
};

let playerScore = 0;
let computerScore = 0;

function checkWinner(){
    if((playerScore == 5)) {
        alert('you are the weiner!');
        return true;
    } else if ((computerScore == 5)) {
        alert('soz, you lose!');
        return true;
    }
}

function updateScoresWhenFinishGame() {
    if (checkWinner() == true) {
        playerScore = 0;
        computerScore = 0;
        document.getElementById('scoreComp').textContent = 0;
        document.getElementById('scorePlayer').textContent = 0;
    }
}

let btnRock = document.querySelector('#btnR');
let btnPaper = document.querySelector('#btnP');
let btnScissor = document.querySelector('#btnS');

function incrementScore(compPoint, playerPoint){
    if (computerSelection == compPoint){
        document.getElementById('scoreComp').textContent = computerScore++;
        document.getElementById('sep').textContent = '{Lose}'
    } else if(computerSelection == playerPoint) {
        document.getElementById('scorePlayer').textContent = playerScore++;
        document.getElementById('sep').textContent = '{Win}'
    }else {
        document.getElementById('sep').textContent = '{Draw}'
    }

    document.getElementById('playerChoiceDisplay').textContent = playerSelection;
    document.getElementById('computerChoiceDisplay').textContent = computerSelection;
}

    btnRock.addEventListener('click', () => {
        playerSelection = "rock";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        incrementScore('paper', 'scissor');
        checkWinner();
        updateScoresWhenFinishGame();
    });

    btnPaper.addEventListener("click", () => {
        playerSelection = "paper";
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        incrementScore('scissor','rock')
        checkWinner();
        updateScoresWhenFinishGame();
    });

    btnScissor.addEventListener('click', () => {
        playerSelection = 'scissor';
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        incrementScore('rock', 'paper')
        checkWinner();
        updateScoresWhenFinishGame();
    });