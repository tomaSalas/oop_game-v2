/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const divShowPhrase = document.querySelector("#phrase ul");

let matches = []


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
        this.aPhrase.forEach(char => {
            if (playerInput.textContent === char) {
                matches.push(true)
            } else {
                matches.push(false)
            }
        });
            
        
    }
    showMatchedLetter() {
        let index = 0;
        const phrase = document.querySelectorAll("#phrase ul li");
        console.log(matches);
        matches.forEach(val => {
            if (val) {
                if (!phrase[index].className.includes("show")) {
                    phrase[index].className = `show letter ${phrase[index].textContent}`;
                    index += 1;
                } else {
                    index += 1;
                } 
            } else {
                index += 1;
            }
            matches = [];

         });
    }

 }



