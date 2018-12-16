/*
============================================
; Title:  cousar-db-3.2.js
; Assignment 3-2
; Author: Donald Cousar 
; Date:   12/16/2018
; Modified By: Donald Cousar
; Description: Compares passed parameters and determines if the strings are a match
; Output1:  value: <param1> and value <param2> does match
; Output2:  value: <param1> and value <param2> did not match
;===========================================


*/
//Start Program

//Compare passed parameters
function match(param1, param2) {

    if(param1===param2) {
        return true;
    } else {
        return false;
    }
}

//Log Mismatch
function logMismatch(param1, param2) {
    var message = "\n value 1: " + param1 + " and value 2: " + param2 + " did not match \n";
    console.log(message);
    return message;
}

//Log Match
function logMatch(param1, param2) {
    var message = "\n value 1: " + param1 + " and value 2: " + param2 + " does match \n";
    console.log(message);
    return message;
}

//define parameters to pass
var test1 = "yes";
var test2 = "no";
var test3 = "yes";
var test4 = "no";
var test5 = "yes";
var test6 = "no";

//evaluate variable 1 against all other values
if(match(test1, test2)) {
    logMatch(test1,test2);
} else {
    logMismatch(test1,test2);
}

if(match(test1, test3)) {
    logMatch(test1,test3);
} else {
    logMismatch(test1,test3);
}

if(match(test1, test4)) {
    logMatch(test1,test4);
} else {
    logMismatch(test1,test4);
}

if(match(test1, test5)) {
    logMatch(test1,test5);
} else {
    logMismatch(test1,test5);
}
if(match(test1, test6)) {
    logMatch(test1,test6);
} else {
    logMismatch(test1,test6);
}

//End Programs