/*
============================================
; Title:  wilson-discussionBoard4.1.js
; Author: Professor Krasso
; Date:   20 Dec 2018
; Modified By: Chris Wilson
; Description: Array Errors
;===========================================
*/

// Import the header function
//const header = require('../wilson-header.js');
//console.log(header.display('Chris', 'Wilson', 'DiscussionBoard 4.1'));
//console.log('');

const assortedArray = [
  { type: 'I am an object' },
  'I am a string!!',
  ['I', 'Am', 'An', 'Array', 'of', 'length', 7'],
  function() {
    return 'I am a function that has been called!';
  },
  true,
  128,
  null,
  undefined
];

//removed extra = in for loop
for (let i = 0; i < assortedArray.length; i++) {
  if (typeof assortedArray[i] === 'function') {
    console.log(assortedArray[i]());
  } else {
    console.log(assortedArray[i]);
  }
}