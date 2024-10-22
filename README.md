# Pig Game
## Description
The Pig Game is a simple two-player dice game. Players take turns to roll a dice as many times as they wish, accumulating points in their current turn. However, if a player rolls a 1, their current turn ends, and they lose all the points accumulated during that turn. The goal is to reach 100 points before your opponent.

## Game Rules
1. Players: The game is played between two players.
2. Roll Dice: On each player's turn, they can roll a dice.
    * If the dice roll is between 2 and 6, the result is added to the player's current score.
    * If the dice roll is 1, the player loses all points accumulated in their current turn, and the turn switches to the next player.
3. Hold: The player can choose to "hold" their current score. This will add their current score to their total score, and their turn will end, switching to the next player.
4. Winning: The first player to reach 100 total points wins the game.

## How to Play
1. Starting the Game:
    * Click the "New Game" button to start a new game.
    * Both players start with 0 points, and Player 1 is the active player.

2. Rolling the Dice:
    * Player clicks the "Roll Dice" button to roll a dice.
    * If the roll is between 2 and 6, the number is added to the current score of the player.
    * If the roll is a 1, the player's turn ends, and all points in their current score are lost.

3. Holding the Score:
    * The player can click the "Hold" button to save their current score into their total score.
    * The turn is then switched to the other player.

4. Winning the Game:
    * The first player to reach 100 points wins.
    * The winning player will be highlighted, and the game will end.

5. Starting a New Game:
    * Press "New Game" at any time to reset the game and start over.

## Files
1. index.html: Contains the basic structure of the game.
2. style.css: Contains all the styles for the game interface.
3. script.js: This is the core of the game's logic. It handles the game flow, interactions, and UI updates.

## Code Explanation
1. Initial Setup: The game starts by calling the init() function, which sets the initial scores for both players, hides the dice, and resets the game state.

2. Rolling the Dice: When the player clicks the "Roll Dice" button, a random number between 1 and 6 is generated. If the roll is 2–6, it adds to the player's current score. If it’s 1, the player's turn ends, and their current score is lost.

3. Holding the Score: If the player chooses to hold, their current score is added to their total score, and control switches to the other player.

4. Winning Condition: The game checks if a player's total score is equal to or greater than 100. If true, the game ends, and the winning player is highlighted.

## How to Run
1. Clone the repository or download the project files.
2. Open index.html in a web browser.
3. Enjoy the game!

## Technologies Used
* HTML: For structuring the game layout.
* CSS: For styling the user interface.
* JavaScript: For the game logic, event handling, and DOM manipulation.

## Features
* Dynamic dice rolling and score updating.
* Switching turns between two players.
* Score holding and winning condition.
* A fully resettable game state via the "New Game" button.

## Future Enhancements
* Add animations for dice rolling.
* Improve the UI for mobile responsiveness.
* Include sound effects for rolling and winning.
* Enjoy the Pig Game and good luck reaching 100 points!
