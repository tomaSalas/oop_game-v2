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
        return Math.floor(Math.random() * data.length);
    }

    

    handleInteraction(playerInput) {
        let checkFail = this.activePhrase.checkLetter(playerInput.textContent);
        playerInput.disabled = true;
        if (checkFail === this.activePhrase.aPhrase.length) {
            playerInput.className = "wrong";
            this.missed += 1;
            this.removeLife();
        } else { 
            playerInput.style.backgroundColor = "green";
            playerInput.style.color = "white";
        } 
        
        this.checkForWin();
        

    }
    removeLife() {
        for (let i = 0; i < lives.length; i += 1) {
            if (lives[i].getAttribute("src") === "images/liveHeart.png") {
                lives[i].setAttribute("src", "images/lostHeart.png");
                break;
            }
            
        }
   
    }
    checkForWin() {
        let checkMatchLetter = 0
        const phraseListLi = document.querySelectorAll("#phrase ul li");
        phraseListLi.forEach( li => {
            if (li.className === `space`) {
                checkMatchLetter += 1
            } else if (li.className === `show letter ${li.textContent}`) {
                checkMatchLetter += 1
            }
        });
        if (checkMatchLetter === phraseListLi.length) {
            this.gameOver(true);
        } else if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    gameOver(bool) {
        const h1 = startScreen.querySelector("#game-over-message");
        const word = document.createElement("h6");
        word.innerHTML = `<b>The phrase:</b> ${this.activePhrase.aPhrase.join("")}`
        if (bool) {
            h1.textContent = "You won the game, you are awesome!";
            h1.appendChild(word);
            startScreen.style.display = "";
            this.reset();

        } else {
            h1.textContent = "Better luck Next Time!";
            h1.appendChild(word);
            startScreen.style.display = "";
            this.reset();
        }
        
    }

    reset() {
        lives.forEach(img => {
            img.setAttribute("src", "images/liveHeart.png")
        });
        divShowPhrase.innerHTML = "";
        buttons.forEach(button => {
            button.disabled = false;
            button.className = "key";
            button.removeAttribute("style");
            this.missed = 0
        });
    }

 }