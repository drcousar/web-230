/*
============================================
; Title:  cousar-db.5.3.js
; Author: Donald Cousar
; Date:   13 Jan 2019
; Description: Iterate over object using foreach 
; Expected Output:

  FirstName LastName
  Exercise 5.3
  Today's Date

  -- COMPOSERS --
  Last Name: Beethoven, Genre: Classical, Rating: 8
  Last Name: Mozart, Genre: Classical, Rating: 10
  Last Name: Bach, Genre: Classical, Rating: 9
  Last Name: Haydn, Genre: Classical, Rating: 6
  Last Name: Schubert, Genre: Classical, Rating: 5

*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 5.3"));
console.log('\n');

//Populate composers object
var composers = [

    {   
        firstName: 'Ludwig',
        lastName: 'Beethoven',   
        genre: 'Classical',  
        rating: 8 
    },
    
    {    
        firstName: 'Johannes',
        lastName: 'Mozart',   
        genre: 'Classical',  
        rating: 10  
    },
    
    {  
        firstName: 'Johann',
        lastName: 'Bach',   
        genre: 'Classical',  
        rating: 9
    },
    
    {
        firstName: 'Franz',
        lastName: 'Haydn',   
        genre: 'Classical',  
        rating: 6 
    },
    
    {
        firstName: 'Franz',
        lastName: 'Schubert',   
        genre: 'Classical',  
        rating: 5 
    },
    
    ];
    //iterate through object
    console.log('-- COMPOSERS --');
    composers.forEach(function(composer) {console.log("Last Name: " + composer.lastName + ", Genre: " + composer.genre + ", Rating: " + composer.rating)});

//End Program