let score = JSON.parse(localStorage.getItem('score')) ||  {
  wins: 0,
  lesses: 0,
  ties: 0
};

updateScoreElement();
//reset the score to 0
function resetScore(){
score.wins = 0;
score.lesses = 0;
score.ties = 0;
localStorage.removeItem('score');
 updateScoreElement();
}
console.log();
function playGame(playerMove){

const computerMove = pickComputerMove();
let result = '';

if(playerMove === 'scissors'){

      if(computerMove === 'scissors'){
          result ='Tie.';
    }else if (computerMove === 'rock'){
          result ='You lose.';
    }else{
          result ='You win.';
    }

}else if(playerMove === 'paper'){

      if(computerMove === 'paper'){
          result ='Tie.';
    }else if (computerMove === 'rock'){
          result ='You win.';
    }else{
          result ='You lose.';
      }

}else{

      if(computerMove === 'rock'){
          result ='Tie.';
    }else if (computerMove === 'paper'){
          result ='You lose.';
    }else{
          result ='You win.';
    }

}

if(result ==='You win.'){
  score.wins++;
}else if(result ==='You lose.'){
  score.lesses++;
}else{
  score.ties++;
}
  document.querySelector('.js-result')
    .innerHTML = result;

  document.querySelector('.js-moves')
    .innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png" alt=""> <img  class="move-icon" src="images/${computerMove}-emoji.png" alt=""> Computer`;

    
  updateScoreElement();
  localStorage.setItem('score',JSON.stringify(score));

}

function updateScoreElement(){
   document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.lesses}, Ties: ${score.ties}`;

}

//pick computer move then return the value 
function pickComputerMove(){
const randomNumber = Math.random(); 
let computerMove = '';

if(randomNumber >= 0 && randomNumber < 1 / 3){
    computerMove = 'rock';
}else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3){
    computerMove = 'paper';

}else if (randomNumber >= 2 / 3 && randomNumber < 1){
    computerMove = 'scissors';
}

console.log(computerMove);

return computerMove;

}