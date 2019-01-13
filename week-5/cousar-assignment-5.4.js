/*
============================================
; Title:  cousar-db.5.4.js
; Author: Donald Cousar
; Date:   13 Jan 2019
; Description:  Filter out unwanted fields with Map()
; Expected Output:

  FirstName LastName
  Assignment 5.4
  Today's Date

  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven

  Rating: 10
  Composer: Mozart

  Rating: 9
  Composer: Bach

  Rating: 6
  Composer: Haydn

  Rating: 5
  Composer: Schubert

  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven

  Genre: Classical
  Composer: Mozart

  Genre: Classical
  Composer: Bach

  Genre: Classical
  Composer: Haydn

  Genre: Classical
  Composer: Schubert
*/

//Start Program
var header = require('../cousar-header');
console.log(header.display("Donald", "Cousar","Exersize 5.4"));
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

        //Map ratings array
        var ratings = composers.map(function (composer) {
        return "Rating: " + composer.rating + "\nComposer: " + composer.lastName
    }); 
        //Map genre array
    var genres = composers.map(function (composer) {
        return "Genre: " + composer.genre + "\nComposer: " + composer.lastName
    }); 

    //Write composer by rating output
    console.log('-- COMPOSER BY RATING --');
    ratings.forEach(function(x) {console.log(x + "\n")});

    //Write composer by genre output
    console.log('-- COMPOSER BY GENRE --');
    genres.forEach(function(x) {console.log(x + "\n")});

    //End Program