/*
============================================
; Title:  cousar-db-3.1.js
; Author: Donald Cousar 
; Date:   12/12/2018
; Modified By: Donald Cousar
; Description: Displays name in a sentence
;===========================================

Expected output:
your name is: Don
*/


//Start Program

//Pass name to function to get a string back describing input
function showNamed(name) {
    if [name.length > 0] 
        return "your name is: " + name;
    } or else {
        return "check input:  Invalid name length";
    }
}

//Display function output
console.log(showNamed("Don"));