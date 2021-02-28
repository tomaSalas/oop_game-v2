/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const divShowPhrase = document.querySelector("#phrase ul");


 class Phrase {
    constructor(obj) {
        this.aPhrase = obj.phrase.split("");
        this.author = obj.author;
    }

    addPhraseToDisplay() {
        let html = ``;

        this.aPhrase.forEach(char => {
            if (char === " ") {
                html += `
        <li class="space">${char}</li>`;
            } else {
                html += `
        <li class="hide letter ${char}">${char}</li>`;
            }
        });
        const authorElement = document.createElement("h3");
        authorElement.innerHTML = ` Author: <i>${this.author}</i>`;
        authorElement.style.marginTop = "40px";
        divShowPhrase.insertAdjacentHTML("afterbegin", html); 
        divShowPhrase.appendChild(authorElement);

    }

    checkLetter(playerInput) {
        let counter = 0
        this.aPhrase.forEach( char => {
            if (char === playerInput) {
                this.showMatchedLetter(char);
            } else {
                counter += 1;
            }
        });
        return counter;
    }

    showMatchedLetter(letterCorrect) {
        const divShowPhraseLi = document.querySelectorAll("#phrase ul li");
        divShowPhraseLi.forEach( li => {
            if (li.textContent === letterCorrect) {
                li.className = `show letter ${li.textContent}`;
            }
        });
       
    }
    

 }



