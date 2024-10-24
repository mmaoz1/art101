// index.js - purpose and description here
// Author: Matan Maoz
// Date: 10.24.2024

// Define variables
myTransport = ["Volkswagen Golf", "E-Bike", "Bus"]

//Create object for my main ride

var myMainRide = {
  make: "Volkswagen",
  model: "Golf TDI",
  year: "2013",
  age: function() {
    return 2022 - this.year;
  }
}

// Output
document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");