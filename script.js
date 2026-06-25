'use strict';

// Selecting elements
const palyer0El = document.querySelector('.player--0');
const palyer1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores =[0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer =function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
        activePlayer = activePlayer ===0 ? 1:0;
        currentScore = 0;
        palyer0El.classList.toggle('player--active');
        palyer1El.classList.toggle('player--active');
}

// rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1.generating a random dice roll
    const dice = Math.trunc(Math.random()*6) +1;
    console.log(dice);
    
    // 2.display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3.check for rolled 1:if true,. switch to next plyer
    if(dice !== 1){
        // add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
    }else{
        // switch to next player
        switchPlayer();
    }

});
btnHold.addEventListener('click', function(){
    // 1.add current score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // 2.check if players score is >=100
    // finish game

    // switch to the next player
    switchPlayer();
})