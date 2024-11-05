// index.js - purpose and description here
// Author: Matan Maoz
// Date: 10.24.2024


//Create main function

function sortUserName() {
  var userName = window.prompt("Hi, please tell me your name so I can fix it.")
  console.log("userName = ", userName);
  //split string to array
  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);
  //sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back to a string
  var nameSorted = nameArraySort.join('')
  console.log("nameSorted =", nameSorted);
  // return the sorted name
  return nameSorted;
}

// Output
document.writeln("Hi there, I fixed your name: ",
  sortUserName(), "</br>");