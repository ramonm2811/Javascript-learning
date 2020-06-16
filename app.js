/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
  var score, roundScore, activePlayer,count6;

init();


//Envent Listener for ROLLING THE DICE
//(roll dice button):
      document.querySelector('.btn-roll').addEventListener('click', function(){
      //create a random number
      var dice1 = Math.floor(Math.random()*6) + 1;
      var dice2 = Math.floor(Math.random()*6) + 1;
      //display the result in the Dice
      var diceDOM1 = document.querySelector('.dice-1');
      var diceDOM2 = document.querySelector('.dice-2');
      diceDOM1.style.display = 'block';
      diceDOM1.src = 'dice-' + dice1 + '.png';
      diceDOM2.style.display = 'block';
      diceDOM2.src = 'dice-' + dice2 + '.png';
      //Update the round Score if the rolled number was not a 1
      if (dice1 !== 1 && dice2 !==1) {
        //add it to round score
        roundScore += (dice1 + dice2);
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        if (dice1 === 6 || dice2 === 6){
          count6 +=1;
          if (count6 === 2){
            document.querySelector('#score-' + activePlayer).textContent = '0';
            score[activePlayer] = 0;
            nextPlayer();
          }
        }
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
      if (score[activePlayer] >= document.getElementById('set-score').value) {
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
    count6 = 0;
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    //hide the dice
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    //next player active
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};


//Function for INITIAL state of the GAME
    function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    count6 = 0;
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};
