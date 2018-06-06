// How to create our fundamental game variables
// How to generate a random number
// How to manipulate the DOM
// How to read from the DOM
// How to change CSS Styles

// What a state variable is, how to use it and why
var scores, roundScore, activePlayer, gamePlaying;

    init();

// How to set up an event handler
// What a callback function is
// What an anonymous function is
// Another way to select elements by ID
// How to change the image in an <img> element


document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
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
        nextPlayer();
        }
    }
}); 
// How to use functions to correctly apply the DRY principle;
// How to think about the game logic like a programmer. 

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;
            
        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]

        // Check if player won the game
        if (scores[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

        function nextPlayer() {
            //Next player
            activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
            roundScore = 0;
    
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
    
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');
    
            document.querySelector('.dice').style.display = 'none'
        }
    
        document.querySelector('.btn-new').addEventListener('click', init);

        function init() {
            scores = [0, 0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;
      
            document.querySelector('.dice').style.display = 'none';

            document.getElementById('score-0').textContent ='0';
            document.getElementById('score-1').textContent ='0';
            document.getElementById('current-0').textContent ='0';
            document.getElementById('current-1').textContent ='0';
            document.getElementById('name-0').textContent = 'Player 1';
            document.getElementById('name-1').textContent = 'Player 2';
            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');
        }