var header = require('../cousar-header');

/**
    
Expected Output:

FirstName LastName
Exercise 2.4
Today's Date

Name: FirstName LastName

Date Entered: <Entered Date for dateWriter function>

Number: <first entered number for format number function>
Number of Fixed Positions: <second entered number for format number function>

The converted integer value is: <Value of string entered converted to an integer>
The converted float value is: <Value of string entered converted to an float>

 */


 //Start Program

 //Return Name
 function fullName(firstName, lastName) {
     return "Name: " + firstName + " " + lastName;
 }

 //Return Date passed
 function dateWriter(year, month, day){
    var outputDate = new Date(year, month, day).toLocaleDateString('en-US');
    return "Date Entered: " + outputDate;
 }

 //Return numbers entered
 function formatNumber(number, numOfFixedPositions){
    return "Number: " + number + "\nNumber of Fixed Postions: " + numOfFixedPositions;
 }

 //Convert string to integer then return value
 function convertToInt(inputString) {
    return parseInt(inputString, 10);
 }

 //Convert string to float then return value
 function convertToFloat(inputString) {
    return parseFloat(inputString);
 }

 //Display Header
 console.log(header.display("Donald", "Cousar","Exersize 2.4"));
 console.log("\n");

//Display Name
 console.log(fullName("Donald", "Cousar"));
 console.log("\n");

 //Display Date passed to function
 console.log(dateWriter(2018,11,10));
 console.log("\n");

 //Display Numbers passed to format number function
 console.log(formatNumber(3, 9));
 console.log("\n");

 //Display converted Integer of string passed to function
 console.log("The converted integer value is: " + convertToInt("52"));
 console.log("\n");

 //Display converted Float of string passed to function
 console.log("The converted float value is: " + convertToFloat("52.098"));

 
 //End Program