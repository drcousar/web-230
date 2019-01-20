/*
============================================
; Title:  cousar-db.6.4.js
; Author: Donald Cousar
; Date:   19 Jan 2019
; Description: Nested Object Literal
  Expected output:

  FirstName LastName
  Exercise 6.4
  Today's Date

Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).

*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 6.4"));
console.log('\n');

//define object
const ticket = {
    id: 105,
    name: "Help Desk Support",
    dateCreated: "1/19/2019",
    priority: "2",  
  
    // nest object
    person: {
      id: 100,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "Programmer I"
    }
  }

  //Output object
  console.log("Ticket " + ticket.id + " was created on " + ticket.dateCreated + " and assigned to employee " + ticket["person"]["firstName"] + " " + ticket["person"]["lastName"] + " (" + ticket["person"]["jobTitle"] + ").");

  //End Programe