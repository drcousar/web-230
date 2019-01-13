/*
============================================
; Title:  cousar-db.5.2.js
; Author: Donald Cousar
; Date:   13 Jan 2019
; Description: Iterate over array using foreach 
; Expected Output:

  Oysters
  Shrimp
  Steak
  Tacos
  Sushi

*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 5.2"));
console.log('\n');

//Define favorite foods array
var favFoods = ['Oysters', 'Shrimp', 'Steak', 'Tacos', 'Sushi'];

//Iterate through array and write to console
favFoods.forEach(function(foods) {console.log(foods)});

//End Program