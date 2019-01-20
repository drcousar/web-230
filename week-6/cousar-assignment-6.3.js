/*
============================================
; Title:  cousar-db.6.3.js
; Author: Donald Cousar
; Date:   19 Jan 2019
; Description: Object Literal
  Expected output:

  FirstName LastName
  Exercise 6.3
  Today's Date

  {id: 101, name: Help Desk Support, requester: Bob Jones}
  
*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 6.3"));
console.log('\n');


// object
const ticket = {
    id: 101,
    name: "Help Desk Support",
    requester: "Bob Jones"
  }

  console.log("{id: " + ticket.id + ", name: " + ticket.name + ", requester: " + ticket.requester + "}");

// End Program