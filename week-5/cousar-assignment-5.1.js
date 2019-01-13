/*
============================================
; Title:  cousar-assignment-5.1.js
; Author: Donald Cousar
; Date:   10 Jan 2019
; Description: Debug my keyed collection array
;===========================================
*/

//BEGIN CODE

// set collection of favorite items
  
  var favorites = new Map();
  favorites.set('color': 'red');
  favorites.set('food': 'pizza');
  favorites.set('candy bar': 'snicker');
  favorites.clear();

// test for populated collection and iterate through collection, then print to console
  if(favorites.size > 0) {
    for(var [key, value] of favorites) {
        console.log('Your favorite ' + key + ' is: ' + value);
    }
//clean up collection
    favorites.clear();
  }

  //END CODE  