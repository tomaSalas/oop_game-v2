/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game(undefined, data, undefined, undefined,undefined);

buttonStarGame.addEventListener("click", () => {
    game.startGame();

    buttons.forEach( button => {
        button.addEventListener("click", (event) => {
        let playerInput = event.target;
        game.handleInteraction(playerInput);
        });
    });

    
    window.addEventListener("keydown", keydownEventHandler);
});

function keydownEventHandler(event) {
    let playerInput = event.key;
    if (lettersOnly()) {
        game.handleInteraction(playerInput);
    }

}

function lettersOnly() {
    // https://stackoverflow.com/questions/16647404/javascript-function-to-enter-only-alphabets-on-keypress
            var charCode = event.keyCode;
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8) {
                if (game.letterGuest.length !== 0) {
                    for (let i = 0; i < game.letterGuest.length; i += 1) {
                        if (game.letterGuest[i] === event.key) {
                            return false
                        }
                    }
                }
                return true;
            } else {
                return false;
            }
}








