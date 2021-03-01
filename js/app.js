/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



////////////////////////////////////////////////////
//////////////////FUNCTIONS////////////////////////
////////////////////////////////////////////////////


/// adds interactions for each keypress depeding on some conditions stablish in the function lettersOnly()
function keydownEventHandler(event) {
    let playerInput = event.key;
    if (lettersOnly()) {
        game.handleInteraction(playerInput);
    }

}


//adds interaction when start button is click. Here is where the actual game starts. 
//the "game.startGame()" and "game.handleInteraction(playerInput)" are call 
function clickEventHandler (event) {
    game.startGame();
    buttons.forEach( button => {
        button.addEventListener("click", (event) => {
        let playerInput = event.target;
        game.handleInteraction(playerInput);
        });
    });

    // adds interaction for the keydown only when the star button is press
    window.addEventListener("keydown", keydownEventHandler);
}

// the only keys that work for the game are in the div with the id of (#qwerty) so only this keys can be press to obtained 
//their value. Also there is array in the game obj call letterGuest that keeps track of what key press have already being made
// so they dont count if they press twice
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


////////////////////////////////////////////////////
//////////////////SETTING THE GAME//////////////////
////////////////////////////////////////////////////



 // creates and isntance of the game with default values except the data which is the phrases obj literal
const game = new Game(undefined, data, undefined, undefined, undefined);

// add interactions to the button that starts the game
buttonStarGame.addEventListener("click", clickEventHandler);













