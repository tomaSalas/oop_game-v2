/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startScreen = document.querySelector("#overlay");
const buttonReset = document.querySelector("#btn__reset");
const buttons = document.querySelectorAll("#qwerty button");



let playerInput = "";

const game = new Game(undefined, data, undefined);

buttonReset.addEventListener("click", (event) => {
    game.startGame();
});


buttons.forEach( button => {
    button.addEventListener("click", (event) => {
    playerInput = event.target;
    game.handleInteraction(playerInput);
    });
});


