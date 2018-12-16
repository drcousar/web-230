/*
============================================
; Title:  cousar-db-3.3.js
; Author: Professor Krasso
; Modified by:  Donald Cousar
; Date:   16 December 2018
; Description: Displays a string message if the choice variable equals C, using switch controls
;===========================================
*/

//Start Program

// populate variable to pass to switch statement
const choice = "C";

//switch statements, output will log different strings based on variable input

switch(choice) {
    case "A":
    console.log("A");
    break

    case "B":
    console.log("B");
    break

    case "C":
    console.log("Winner winner, chicken dinner!");
    break

    case "D":
    console.log("D");
    break

    default:
    console.log("Invalid choice");
    break
}

//End Program