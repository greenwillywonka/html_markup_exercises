"use strict";

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const sayings = [
    "It is not certain",
    "It is decidedly so",
    "Without a doubt",
    "I wouldnt count on it",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
    "Hell nah bro",
    "Does a bear shit in the woods?",
    "Most likely",
    "Outlook good",
 ];

function getMagic8BallResponse() {
    const randomIndex = randomNumberGenerator(0, sayings.length - 1);
    return sayings[randomIndex];
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const responseParagraph = document.getElementById("response");
    const inputField = document.getElementById("question");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

            const userQuestion = inputField.value.trim();

        if (userQuestion === "") {
            responseParagraph.textContent = "Please ask a question first!";
            void responseParagraph.offsetHeight;
            responseParagraph.classList.add("visible");
            return;
        }

        const answer = getMagic8BallResponse();
        

        setTimeout(() => {
            responseParagraph.textContent = answer;
            responseParagraph.classList.add("visible");
        }, 100);

        if (responseParagraph.classList.contains("visible")) {
            responseParagraph.classList.remove("visible");
        }

        inputField.value = "";
    });
});