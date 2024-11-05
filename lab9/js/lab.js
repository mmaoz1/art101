// index.js - purpose and description here
// Author: Matan Maoz
// Date: 11.04.2024

// lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

// Requirements: jQuery must be loaded for this script to work.

// Add button to the challenge section
$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// Add button to the problems section
$("#problems").append("<button id='button-problems'>Highlight Problems</button>");

// Add button to the results section
$("#results").append("<button id='button-results'>Show Results</button>");

// Add click listener to the challenge button
$("#button-challenge").click(function(){
    // Toggle the "special" class on the challenge section
    $("#challenge").toggleClass("special");
});

// Add click listener to the problems button
$("#button-problems").click(function(){
    // Toggle the "highlight" class on the problems section
    $("#problems").toggleClass("highlight");
});

// Add click listener to the results button
$("#button-results").click(function(){
    // Toggle the "visible" class on the results section
    $("#results").toggleClass("visible");
});
