/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, dice;

scores = [0,0];
roundScores = 0;
activePlayer = 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    var dice = Math.floor(Math.random()*6) + 1;

    //2. Display the rusult
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    //3. Update the round score If the rolled number was NOT a 1
    if(dice > 1) {
        //Add score
    } else {
        //Next player
    }
});

//document.querySelector('#current-'+ activePlayer).textContent = dice;

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


//7. Events and Event Handling Rolling the Dice.mp4 (07:00)