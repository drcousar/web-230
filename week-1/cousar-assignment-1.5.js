/*
============================================
; Title:  Assignment 1.5
; Author: Albert Einstein
; Date:   25 June 2017
; Modified By: Donald Cousar
; Modified Date: 12/2/2018
; Description: This program demonstrates the
;   use of JavaScript types, values, and 
;   and variables in an application.
;===========================================
*/ 

/*
    The code below builds a properly formatted
    header and must be included in all applications
    you write. In subsequent week's we will build this
    functionality into a function and place it in a separate file.
*/

var myFirstName = "Albert";
var myLastName = "Einstein";
var todaysDate = new Date().toLocaleDateString();
var assignmentNum = "Assignment 1.5";

var programHeader = "\n" + myFirstName + " " + myLastName + "\n"
    + assignmentNum + "\nDate: " + todaysDate;

console.log(programHeader);
console.log("\n"); 

// start of program - your code goes below this line
var firstName1 = "Bob";
var lastName1 = "Smith";
var address1 = "505 Main Street Omaha, NE";
var payRate1 = "10.5";
var hireDate1 = new Date(2016, 4, 22).toLocaleDateString();

var firstName2 = "John";
var lastName2 = "Doe";
var address2 = "421 Elm Street Omaha, NE";
var payRate2 = "12.1";
var hireDate2 = new Date(2015, 7, 22).toLocaleDateString();

var firstName3 = "Linda";
var lastName3 = "Jones";
var address3 = "322 Fortham Road Omaha, NE";
var payRate3 = "13.75";
var hireDate3 = new Date(2012, 3, 25).toLocaleDateString();

var firstName4 = "Tom";
var lastName4 = "Singleton";
var address4 = "1 Gym Street Omaha, NE";
var payRate4 = "20.5";
var hireDate4 = new Date(2000, 8, 11).toLocaleDateString();

var firstName5 = "Barbera";
var lastName5 = "Adams";
var address5 = "12 Wilma Way Omaha, NE";
var payRate5 = "11.5";
var hireDate5 = new Date(2018, 3, 1).toLocaleDateString();



console.log("First Name: " + firstName1);
console.log("Last Name: " + lastName1);
console.log("Address: " + address1);
console.log("Pay Rate: $" + payRate1);
console.log("Hire Date: " + hireDate1);
console.log("\n");

console.log("First Name: " + firstName2);
console.log("Last Name: " + lastName2);
console.log("Address: " + address2);
console.log("Pay Rate: $" + payRate2);
console.log("Hire Date: " + hireDate2);
console.log("\n");

console.log("First Name: " + firstName3);
console.log("Last Name: " + lastName3);
console.log("Address: " + address3);
console.log("Pay Rate: $" + payRate3);
console.log("Hire Date: " + hireDate3);
console.log("\n");

console.log("First Name: " + firstName4);
console.log("Last Name: " + lastName4);
console.log("Address: " + address4);
console.log("Pay Rate: $" + payRate4);
console.log("Hire Date: " + hireDate4);
console.log("\n");

console.log("First Name: " + firstName5);
console.log("Last Name: " + lastName5);
console.log("Address: " + address5);
console.log("Pay Rate: $" + payRate5);
console.log("Hire Date: " + hireDate5);
console.log("\n");
// end of program 