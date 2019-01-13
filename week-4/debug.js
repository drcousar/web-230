// Header
//var header = require('../week-2/townsend.js');
//console.log(header.display("Ethan", "Townsend", "Exercise 3.3"));
//console.log('\n');

/*
============================================
; Title:  townsend-discussion-4.1js
; Author: Professor Krasso
; Date:   20 December 2018
; Modified By: Ethan Townsend
; Last Modified By: Don Cousar
; Description:  Discussion
;===========================================
*/

//my array


var baseballTeams = ['Boston Redsox', 'Yankees', 'LA Dodgers', 'San Diego Padres'];

baseballTeams.push('Tampa Bay Rays');
baseballTeams.unshift('San Fransisco Giants');

for ( var i = 0; i < baseballTeams.length; i++) {
    console.log(baseballTeams[i]);
}

// Expected Output

/*
San Fransisco Giants
Boston Redsox
LA Dodgers
San Diego Padres
Tampa Bay Rays
*/