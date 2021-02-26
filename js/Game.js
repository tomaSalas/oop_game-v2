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
        startScreen.style.display = "none";
        this.activePhrase = new Phrase(this.phrases[this.getRandomPharse()]);
        this.activePhrase.addPhraseToDisplay();

    }

    getRandomPharse() {
        return Math.floor(Math.random() * 1);
    }

    

    handleInteraction(playerInput) {
        let checkFail = this.activePhrase.checkLetter(playerInput.textContent);
        playerInput.disabled = true;
        if (checkFail === this.activePhrase.aPhrase.length) {
            playerInput.className = "wrong";
            this.removeLife();
        } else { 
            playerInput.style.backgroundColor = "green";
            playerInput.style.color = "white";
        } 
        

        

    }
    removeLife() {
        const lives = document.querySelector("#scoreboard ol");
        console.log(lives);
        lives.removeChild(lives.lastChild);
        console.log(lives);
   
    }
    checkForWin() {}

    gameOver() {}

 }