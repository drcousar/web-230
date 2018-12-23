/*
============================================
; Title:  cousar-db.4.3.js
; Author: Donald Cousar
; Date:   23 Dec 2018
; Description: 
  Expected Output:

 FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
;===========================================
*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 4.3"));

// array of string fruit values
const vehicles = ['Car', 'Trucks', 'Motorcycle', 'Airplane', 'Bus'];

/**
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */
function getValue(arr, val) {
  let index = 1

  for (let j = 0; j < arr.length; j++) {
      if(arr[j] === val){
        console.log(arr[j])
      }   
    index++
  }
}

//call the getValue() function and display all array values
console.log("\n-- DISPLAYING ARRAY ITEMS --")
for (let j = 0; j < vehicles.length; j++) {
    console.log(vehicles[j])
}

// call the getValue() function and output the contents of the vehicles array
console.log("\n-- DISPLAYING SELECTED VALUE --")
getValue(vehicles, "Motorcycle")

console.log("\n-- DISPLAYING SELECTED VALUE --")
getValue(vehicles, "Bus")
