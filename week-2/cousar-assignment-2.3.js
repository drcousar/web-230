var header = require('../cousar-header');
/*
Expected output:

FirstName LastName
Exercise 2.3
Today's Date

Hello FirstName LastName!
*/


//Start Program

//Define Properties
myName.donald = "Donald";
myName.cousar = "Cousar";

function myName() {
    //return output
    return myName.donald + " " + myName.cousar;
}

//Verify output
console.log(header.display("Donald", "Cousar","Exersize 2.3"));
console.log("\n");
console.log("Hello " + myName());

//End Program