/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const divShowPhrase = document.querySelector("#phrase ul");


 class Phrase {
    constructor(aPhrase) {
        this.aPhrase = aPhrase.split("");
    }

    addPhraseToDisplay() {
        let html = ``;

        this.aPhrase.forEach(char => {
            if (char === " ") {
                html += `
        <li class="hide letter space">${char}</li>`;
            } else {
                html += `
        <li class="hide letter ${char}">${char}</li>`;
            }
        });
        divShowPhrase.insertAdjacentHTML("afterbegin", html); 

    }

    checkLetter(playerInput) {
        
        let counter = 0
        phrase.forEach(char => {
            if (playerInput.textContent === char.textContent) {
                this.showMatchedLetter(char, playerInput);
            }
        });
        
        phrase.forEach(char => {
         console.log(char);
        });
        //     // console.log(counter);
        //     // if (counter > 0) {
        //     //     console.log("there is a match");
        //     //     counter = 0;
        //     //     return true;
        //     // }
        //     // else {
        //     //     console.log("there is no match");
        //     //     counter = 0;
        //     //     return false;
    
            // }
        
    }
    showMatchedLetter(char, playerInput) {
        char.className = `show letter ${playerInput.textContent}`; 
            }

 }



