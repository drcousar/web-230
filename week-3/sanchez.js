/*
============================================
; Title:  sanchez-assignment-3.1.js
; Author: Gabriel Sanchez
; Date:   12/13/2018
; Modified By: Donald Cousar
; Description: Displays a formatted header
;
;===========================================
*/

//Removed header for debug of Gabriel's code
/* header */
//var header = require ('../sanchez-header.js');
//console.log(header.display('Gabriel', 'Sanchez', 'assignment 3.1'));
//console.log('\n');
// Code goes here..

/*  The program should not execute and there should be at least two errors in the code you post to Blackboard.
*/

// One Agument, if statement

function gabrielAge() {
  var age = 27;
  if ( age === 27 ) {
  return "Correct, That is Gabriel's Age";
  
  } else {
  return "Incorrect, That's not Gabriel's Age";
  }
}

// Display output
console.log(gabrielAge());

/* Expected output
Correct, That is Gabriel's Age
*/

// end of program...