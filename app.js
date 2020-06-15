/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
  var score, roundScore, activePlayer;

init();


//Envent Listener for ROLLING THE DICE
//(roll dice button):
document.querySelector('.btn-roll').addEventListener('click', function(){
      //create a random number
      var dice = Math.floor(Math.random()*6) + 1;
      //display the result in the Dice
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
      //Update the round Score if the rolled number was not a 1
      if (dice !== 1) {
        //add it to round score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }else{
        //next active player, round score 0
        nextPlayer();
      }
});



//Evenet Listener to ADD currentScore to Global Score
//HOLD button:
document.querySelector('.btn-hold').addEventListener('click', function(){
      // Add current score to global Score
        score[activePlayer] += roundScore;
      //update the user interface
      document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];
      //check if player won the game
      if (score[activePlayer] >= 20) {
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('#current-' + activePlayer).textContent = 0;
      } else {
        nextPlayer();
      }
});



//Event Listener for NEW GAME
//New game button
document.querySelector('.btn-new').addEventListener('click', init);




//Function NEXT Player
function nextPlayer(){
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    //hide the dice
    document.querySelector('.dice').style.display = 'none';
    //next player active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};


//Function for INITIAL state of the GAME
function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};
