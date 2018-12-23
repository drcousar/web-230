/*
============================================
; Title:  cousar-db.4.1.js
; Author: Donald Cousar
; Date:   20 Dec 2018
; Description: Debug Array Code
; Expected Output:
; -- DISPLAYING FRUITS --
; 1. Apple
; 2. Orange
; 3. Grape
; 4. Strawberry
; 5. Cherry
; 6. Banana
;===========================================
*/

//Start Program

// array of string values
const fruits = ['Apple', 'Orange', 'Grape', 'Strawberry', 'Cherry', 'Banana']

/**
 * Params: arr
 * Response: console output
 * Description: Write array contents to console
 */
function getFruit(arr) {
  let index = 1;

  for (let x = 0; x => arr.length; x++) {
    console.log(index + '. ' + arr[x]);
    index++;
  }
}

// call the getFruit() function and display the contents of the fruits array
console.log('-- DISPLAYING FRUITS --');
getFruits(fruits);

//End Program