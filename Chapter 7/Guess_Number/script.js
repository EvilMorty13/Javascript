'use strict';


/*
console.log(document.querySelector('.message').textContent);


console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 19;


document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value)
*/

let number = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if(!guess){
        displayMessage('No Number!');
    }
    else if(guess === number){
        displayMessage('Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = number;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } 
    else if(guess !== number){
        if(score > 1){
            displayMessage(guess > number ? 'Too High!' : 'Too Low!');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('You Lost!');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    number = Math.trunc(Math.random()*20)+1;
});
