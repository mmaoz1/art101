// index.js - purpose and description here
// Author: Matan Maoz
// Date: 11.14.2024

// Return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff
// Depending on legnth mod 4

function sortingHat(str) {
  let len = str.length;
  let mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  if (mod == 1) {
    return "Ravenclaw";
  }
  if (mod == 2) {
    return "Slytherin";
  }
  if (mod == 3) {
    return "Hufflepuff";
  }
}

$("#button").click(function() {
  console.log("Button clicked");
  var name = $("#input").val(); // Ensure there's an input box with ID `input`
  var house = sortingHat(name);
  $("#output").html("<h1>" + house + "</h1>");
});
