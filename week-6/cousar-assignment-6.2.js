/*
============================================
; Title:  cousar-db.6.2.js
; Author: Donald Cousar
; Date:   19 Jan 2019
; Description: Try / catch error 
; Expected Output:

  FirstName LastName
  Exercise 6.2
  Today's Date

Catch clasue: SyntaxError: Invalid or unexpected token
Finally clause: End of program...

  */

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 6.2"));
console.log('\n');

try {
    eval("alert('This should catch an error)");
} catch(err) {
    console.log("Catch clasue: " + err);
} finally {
    console.log("Finally clause: End of program...");
}
//End Program