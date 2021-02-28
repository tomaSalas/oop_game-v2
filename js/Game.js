/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */



 class Game {
    constructor(missed = 0, phrases, activePhrase = null, letterGuest = [], numberOfTries = 0) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
        this.letterGuest = letterGuest;
        this.numberOfTries = numberOfTries;
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
        let checkFail = 0
       if (playerInput.textContent) {
        this.letterGuest.push(playerInput.textContent);
        let checkFail = this.activePhrase.checkLetter(playerInput.textContent);
        playerInput.disabled = true;
        if (checkFail === this.activePhrase.aPhrase.length) {
            playerInput.className = "wrong";
            console.log("its being fire click event")
            console.log(this.missed);
            this.missed += 1;
            console.log(this.missed);
            this.removeLife();
        } else { 
            playerInput.style.backgroundColor = "green";
            playerInput.style.color = "white";
        }    
        this.checkForWin();

       } else {
        this.letterGuest.push(playerInput);
            let checkFail = this.activePhrase.checkLetter(playerInput);
            if (checkFail === this.activePhrase.aPhrase.length) {
                for (let i = 0; i < buttons.length; i += 1) {
                    if (buttons[i].textContent === playerInput) {
                        buttons[i].className = "wrong";
                        buttons[i].disabled = true;
                        console.log("its being fire keydown event");
                        console.log(this.missed);
                        this.missed += 1;
                        console.log(this.missed);
                        this.removeLife();
                        break;
                    }
                   
                }
            } else { 
                for (let i = 0; i < buttons.length; i += 1) {
                    if (buttons[i].textContent === playerInput) {
                        buttons[i].style.backgroundColor = "green";
                        buttons[i].style.color = "white";
                        buttons[i].disabled = true;
                        break;
                    }
            
                
                }
            } 
            
            this.checkForWin();  
       } 
        

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
            this.numberOfTries += 1;
            this.gameOver(true);
        } else if (this.missed === 5) {
            this.numberOfTries = 0;
            this.gameOver(false);
        }
    }

    gameOver(bool) {
        const h1 = startScreen.querySelector("#game-over-message");
        const word = document.createElement("h6");
        word.innerHTML = `<b>The phrase to hunt was: \"<i>${this.activePhrase.aPhrase.join("")}</i>\"<br>
        If you guess five consecutive phrases, a super-secret message will pop on the screen! Are you up for the challenge? <br><br><br>
        ${this.numberOfTries} out of 5`
        if (bool) {
            h1.textContent = "You won the game, you are awesome!";
            h1.appendChild(word);
            startScreen.style.display = "";
            this.reset();

        } else {
            h1.textContent = "Better luck Next Time!";
            h1.appendChild(word);
            this.randomBackground();
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
            
        });
        
        this.letterGuest = [];
        this.missed = 0;

        window.removeEventListener("keydown", keydownEventHandler);
    }

    randomBackground() {
        {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            startScreen.style.backgroundColor = bgColor;
          }
    }

 }