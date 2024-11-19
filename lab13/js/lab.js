// index.js - purpose and description here
// Author: Matan Maoz
// Date: 11.14.2024

const outputDiv = document.getElementById("output"); // Reference to the output div

for (let i = 1; i <= 200; i++) {
    let message = "";

    // if multiple of 3 and 5
    if (i % 15 == 0) {
        message = "FizzBuzz!";
    }
    // if multiple of 3 and 7
    else if (i % 21 == 0) {
        message = "FizzBoom!";
    }
    // if multiple of 5 and 7
    else if (i % 35 == 0) {
        message = "BuzzBoom!";
    }
    // if multiple of 3
    else if (i % 3 == 0) {
        message = "Fizz!";
    }
    // if multiple of 5
    else if (i % 5 == 0) {
        message = "Buzz!";
    }
    // if multiple of 7
    else if (i % 7 == 0) {
        message = "Boom!";
    }

    if (message) {
        const p = document.createElement("p"); // Create a new paragraph element
        p.textContent = `${i}: ${message}`;    // Set the content
        outputDiv.appendChild(p);             // Append the paragraph to the output div
    }
}
