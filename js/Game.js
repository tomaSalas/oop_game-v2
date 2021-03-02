/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


// create a game obj
 class Game {
    constructor(missed = 0, phrases = undefined, activePhrase = null, letterGuest = [], numberOfTries = 0, secret = false, guest = false) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase;
        this.letterGuest = letterGuest;
        this.numberOfTries = numberOfTries;
        this.secret = secret;
        this.guest = guest;
    }     
// sets attribute of div to none and creates a instance of the phrase obj. Also depending if the user has
// continue playing without lossing 5 times the secret phrase is handle. 
    startGame() {
        if (this.secret) {
            startScreen.style.display = "none";
            this.secret = false;
        } else {
            this.activePhrase = new Phrase(this.phrases[this.getRandomPharse()]);
            this.activePhrase.addPhraseToDisplay();
            startScreen.style.display = "none";
        }
    }
// gets a random phrase from the obj data
    getRandomPharse() {
        return Math.floor(Math.random() * data.length);
    }

    
// a lot happens here but the flow of the game is determine
// since there are two eventHandlers "click" "keydoown"
// they are treated seperatly in this method
    handleInteraction(playerInput) {
        // var that determines how many wrong matches come back from the checkLetter method in the pharse obj
        let checkFail = 0
        // if player input comes from the event handler "click"
       if (playerInput.textContent) {
        // get the letter that player click a push it the array
        this.letterGuest.push(playerInput.textContent);
        // store the wrong matches in the var
        let checkFail = this.activePhrase.checkLetter(playerInput.textContent);
        console.log(checkFail);
        console.log(this.activePhrase.phrase.length);
        // disable the click button
        playerInput.disabled = true;
        // if the number of fail matches equals the lenght of the array it means that the player input does not
        // match any letteters. If this is the case remove a life
        if (checkFail === this.activePhrase.phrase.length) {
            playerInput.className = "wrong";
            this.missed += 1;
            this.removeLife();
        } else { 
        // player input matches a letter
            playerInput.style.backgroundColor = "green";
            playerInput.style.color = "white";
        }  
        // check to see if the win condition is satifiy  
        this.checkForWin();

       } else {
         // get the letter that player click a push it the array
        this.letterGuest.push(playerInput);
        // this part deals with the event handler keydown
        // similar to the click eventbut playerInput does not have a direct access to the button classes
        // so every time the keydown evennt is activated it will change the class associated with that key depending 
        //if the letter press down is contain in the phrase
            let checkFail = this.activePhrase.checkLetter(playerInput);
            if (checkFail === this.activePhrase.phrase.length) {
                for (let i = 0; i < buttons.length; i += 1) {
                    //wrong letter
                    if (buttons[i].textContent === playerInput) {
                        buttons[i].className = "wrong";
                        buttons[i].disabled = true;
                        this.missed += 1;
                        this.removeLife();
                    }
                   
                }
            } else { 
                for (let i = 0; i < buttons.length; i += 1) {
                    //correct letter
                    if (buttons[i].textContent === playerInput) {
                        buttons[i].style.backgroundColor = "green";
                        buttons[i].style.color = "white";
                        buttons[i].disabled = true;
                
                    }
            
                
                }
            } 
            // check if there is a win
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
        // if all classes contain the phrase  have the show classes it means that the player match all the letters.
        // not taking into account the space class
        let checkMatchLetter = 0
        const phraseListLi = document.querySelectorAll("#phrase ul li");
        phraseListLi.forEach( li => {
            // add the space as currecly guest
            if (li.className === `space`) {
                checkMatchLetter += 1
            } else if (li.className === `show letter ${li.textContent}`) {
                checkMatchLetter += 1
            }
        });
        // if the number of classes that contain the show class is equal to the number of letters contain in the 
        // phrase then game is over
        if (checkMatchLetter === phraseListLi.length) {
            this.numberOfTries += 1;
            // if you have currecly guest 4 phrases then you can access the super secret phrase
            if (this.numberOfTries === 4) {
                this.specialRound()
            } else {
                this.gameOver(true);
            }
        } else if (this.missed === 5) {
            // if the phrase is the secret phrase then do not show the phrase in the start screen
            if (phraseListLi.length === 18) {
                this.guest = true;
            } 
            this.numberOfTries = 0;
            this.gameOver(false);
        }
    }

    gameOver(bool) {
        const h1 = startScreen.querySelector("#game-over-message");
        const word = document.createElement("h6");
        // if the secret phrase is not guest
        if (this.guest) {
            word.innerHTML = `<b>The phrase to hunt was: \"<i>??????????????????</i>\"<br>
            Guess consecutive phrases, a super-secret message will pop on the screen! Are you up for the challenge? <br><br><br>
            ${this.numberOfTries} out of 4`;
            this.guest = false;
        } else {
        // all other phrases  guests
            word.innerHTML = `<b>The phrase to hunt was: \"<i>${this.activePhrase.phrase.join("")}</i>\"<br>
            Guess consecutive phrases, a super-secret message will pop on the screen! Are you up for the challenge? <br><br><br>
        ${this.numberOfTries} out of 4`;
        }
        // if you match the phrase
        if (bool) {
            h1.textContent = "You won the round!";
            h1.appendChild(word);
            startScreen.style.display = "";
            this.reset();
        // if you did not match the phrase
        } else {
            h1.textContent = "Better luck Next Time!";
            h1.appendChild(word);
            this.randomBackground();
            startScreen.style.display = "";
            this.numberOfTries = 0;
            this.reset();
        }
        
    }
    //resets almost of the values and removes the event handler for both key and click so they cannot fire in the start screen
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
    // adds a background color for start game screen
    randomBackground() {
        {
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            var bgColor = "rgb(" + x + "," + y + "," + z + ")";
            startScreen.style.backgroundColor = bgColor;
          }

    }
    // sets up the game for the secret phrase
    specialRound() {
        const h1 = startScreen.querySelector("#game-over-message");
        h1.innerHTML =  `You dind't think it was going to be that easy did you? <br>
        You got to guest the secret phrase`;
        this.reset();
        this.activePhrase = new Phrase(secret);
        this.activePhrase.addPhraseToDisplay();
        this.numberOfTries = 0;
        this.secret = true;
        startScreen.style.display = "";
       
        

    }

 }