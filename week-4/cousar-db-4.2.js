/*
============================================
; Title:  cousar-db.4.2.js
; Author: Donald Cousar
; Date:   23 Dec 2018
; Description: 
; Expected Output:
; 1. Apple
; 2. Orange
; 3. Banana
; 4. Mango
; 5. Pear
;===========================================
*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 4.2"));

// array of string fruit values
const fruits = ['Apple', 'Orange', 'Banana', 'Mango', 'Pear'];

/**
 * Params: array
 * Response: console message
 * Description: Writes the contents of an array to the console window
 */
function getFruit(arr) {
  let index = 1

  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j])
    index++
  }
}

// call the getFruit() function and output the contents of the fruits array
console.log('\n')
getFruit(fruits)
