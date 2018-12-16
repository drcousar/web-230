/*
============================================
; Title:  sullenger-db-3.1.js
; Author: Jason Sullenger
; Date:   12 December 2018
; Description: DB covering control statements. Errors to be included
;===========================================
*/

// Declaration of function checking population

function populationOfWorlds(x) {
    if(x = 0) {
        return "World Destroyed";
    }
    else{
        return"We're good, carry on.";
    }
};

// console logging population check

console.log(populationOfWorlds(3));