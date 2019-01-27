/*
============================================
; Title:  cousar-assignment.7.2.js
; Author: Donald Cousar
; Date:   27 Jan 2019
; Description: Constructor Functions 
; Expected Output:

  FirstName LastName
  Exercise 7.2
  Today's Date

  1 Thomas Edison Software Engineer
  2 Benjamin Franklin Programmer
  3 Nikola Tesla Project Manager
  4 Charles Babbage Product Manager
  5 Alexander Bell Business Analyst
  */

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exercise 7.2"));
console.log('\n');

//Create Employee constructor
function Employee(id, firstName, lastName, title) {
    this.id = id;  
    this.firstName = firstName;  
    this.lastName = lastName;  
    this.title = title;  
  }
  
  //Populate array with entries
  var employees = [  
    new Employee(1, "Thomas", "Edison", "Software Engineer"),
    new Employee(2, "Benjamin", "Franklin", "Programmer"),
    new Employee(3, "Nikola", "Tesla", "Project Manager"),
    new Employee(4, "Charles", "Babbage", "Product Manager"),
    new Employee(5, "Alexander", "Bell", "Business Analyst")
  ];
  
  //Iterate through array and write to console
employees.forEach(function(employee) {console.log(employee.id + " " + employee.firstName +  " " + employee.lastName +  " " + employee.title)});
 