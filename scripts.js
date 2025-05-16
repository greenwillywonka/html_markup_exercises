"use strict";

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 const sayings = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes, definitely",
    "You may rely on it",
    "As I see it, yes",
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
    responseParagraph.classList.remove("visible"); // Hide the response initially

    form.addEventListener("submit", (event) => {
        event.preventDefault();

            const userQuestion = inputField.value.trim();

        if (userQuestion === "") {
            responseParagraph.classList.remove("visible");
            responseParagraph.textContent = "Please ask a question first!";
            void responseParagraph.offsetHeight;
            responseParagraph.classList.add("visible");
            return;
        }

        const answer = getMagic8BallResponse();
        responseParagraph.classList.remove("visible");

        setTimeout(() => {
            responseParagraph.textContent = answer;
            responseParagraph.classList.add("visible");
        }, 20);

        inputField.value = "";
    });
});