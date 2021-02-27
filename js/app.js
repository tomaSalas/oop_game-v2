/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game(undefined, data, undefined);

buttonStarGame.addEventListener("click", (event) => {
    game.startGame();
});

buttons.forEach( button => {
    button.addEventListener("click", (event) => {
    let playerInput = event.target;
    game.handleInteraction(playerInput);
    });
});


