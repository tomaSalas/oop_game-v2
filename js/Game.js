/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
    constructor(missed = 0, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
    }     

    startGame() {
        startScreen.style.visibility = "hidden";
        this.activePhrase = new Phrase(this.phrases[this.getRandomPharse()]);
        this.activePhrase.addPhraseToDisplay();

    }

    getRandomPharse() {
        return Math.floor(Math.random() * this.phrases.length);
    }

    

    handleInteraction(playerInput) {
        const arrayAnswer = this.activePhrase.checkLetter(playerInput); 
            playerInput.disabled = true;
            playerInput.style.background = "black";
            playerInput.style.color = "black";
        this.activePhrase.showMatchedLetter(arrayAnswer);
        

    }
    removeLife() {

    }
    checkForWin() {}

    gameOver() {}

 }