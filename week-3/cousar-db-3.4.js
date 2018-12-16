/*
============================================
; Title:  cousar-db-3.4.js
; Assignment 3-4
; Author: Donald Cousar 
; Date:   12/16/2018
; Modified By: Donald Cousar



; Description: Compares passed parameters and determines if the strings are a match
; Output1:  value: <param1> and value <param2> does match
; Output2:  value: <param1> and value <param2> did not match
;===========================================

*/
//Start Program

var myNumber = 5;

//Log Mismatch
function logMismatch(param1, param2) {
    var message = "\n" + param1 + " does not match: " + param2;
    console.log(message);
    return message;
}

//Log Match
function logMatch(param1, param2) {
    var message = "\n" + param1 + " does match: " + param2;
    console.log(message);
    return message;
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

//Loop code

//Instantiate variable: myRandomNumber
var myRandomNumber = 0;
for(var x = 0; x < 10; x++) {
    myRandomNumber = randomNumber();

    if(myNumber === myRandomNumber) {
        logMatch(myNumber, myRandomNumber);
    } else {
        logMismatch(myNumber, myRandomNumber);
    }
}