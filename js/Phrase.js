/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



// Phrase obj is need it for changing the status of the classes in the document
 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.phrase.split(""); // split method seperates the string in to an array of strings 
        this.author = phrase.author;
    }
// add phrases to display in the document depeding on the phrase that was pass to the phrase obj
    addPhraseToDisplay() {
        let html = ``;

        this.phrase.forEach(char => {
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
// check method checks to see if any letter that the player inputs matches any letter in the array of strings
// if a match is found, the class for that letter in the array is change to show
// if a match is not found a counter var is increase and return to the method call "handlerInteractions"
    checkLetter(playerInput) {
        let counter = 0
        this.phrase.forEach( char => {
            if (char === playerInput) {
                this.showMatchedLetter(char);
            } else {
                counter += 1;
            }
        });
        return counter;
    }
// makes the change for the class from hiden to show depdening if the letter is match in the previos method
    showMatchedLetter(letterCorrect) {
        const divShowPhraseLi = document.querySelectorAll("#phrase ul li");
        divShowPhraseLi.forEach( li => {
            if (li.textContent === letterCorrect) {
                li.className = `show letter ${li.textContent}`;
            }
        });
       
    }
    

 }



