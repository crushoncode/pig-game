// How to create our fundamental game variables
// How to generate a random number
// How to manipulate the DOM
// How to read from the DOM
// How to change CSS Styles

const scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// document.querySelector('#current-' +  activePlayer).textContent = dice;

// const x = document.querySelector('#score-0').textContent;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textcontent ='0';


// How to set up an event handler
// What a callback function is
// What an anonymous function is
// Another way to select elements by ID
// How to change the image in an <img> element


document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Random number
    let dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result
    let diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

});


