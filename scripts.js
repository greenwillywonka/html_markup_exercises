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
        event.preventDefault(); // Stop the form from reloading the page

           const userQuestion = inputField.value.trim(); // remove extra spaces

        // Input Validation check
        if (userQuestion === "") {
            responseParagraph.textContent = "Please ask a question first!";
            responseParagreaph.classList.remove("visible"); // Hide the response
            void responseParagraph.offsetWidth; // Trigger reflow
            responseParagraph.classList.add("visible"); // Show the response
            return;
        }
       
        const answer = getMagic8BallResponse();
        responseParagraph.classList.remove("visible"); // Hide the response initially
        
        setTimeout(() => {
            responseParagraph.textContent = answer;
            responseParagraph.classList.add("visible"); // Show the response
        }, 20); // Delay the response by .2 seconds

        // Clear the input field
        inputField.value = "";
    });
});