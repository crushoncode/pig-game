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

    // What the ternary operator is
    // How to add, remove and toggle HTML classes

    //3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {

        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
        roundScore == 0

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // document.querySelector('.player-0-panel').classList.remove('active');
        // document.querySelector('.player-1-panel').classList.add('active')

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none'

        }

         // How to use functions to correctly apply the DRY principle;
        // How to think about the game logic like a programmer. 

        document.querySelector('.btn-hold').addEventListener('click', function() {
            // Add CURRENT score to GLOBAL score
            score[activePlayer] += roundScore;
            
            // Update the UI
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

            // Check if player won the game

        })

       
});


