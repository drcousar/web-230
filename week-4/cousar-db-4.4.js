/*
============================================
; Title:  cousar-db.4.4.js
; Author: Donald Cousar
; Date:   23 Dec 2018
; Description: Predicates
; Expected Output:

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 4.4"));

// array of string state values
const states = ['Alabama', 'Nebraska', 'Iowa', 'California', 'Nevada'];

//Compare parameter values
function getState(val1, val2) {
    if(val1 === val2) {
        return true;
    }
}

//Display Original Array
console.log("\n-- ORIGINAL ARRAY --")
for (let j = 0; j < states.length; j++) {
    console.log(states[j])
}

//Display Sorted Array
states.sort();
console.log("\n-- SORTED ARRAY --")
for (let j = 0; j < states.length; j++) {
    console.log(states[j])
}

//Display Selected value
console.log("\n --Selected value-- ");
console.log(
    states.filter(
        function(val1) {
            return getState(val1, "Iowa");
        }
    )[0]
);
//End Program