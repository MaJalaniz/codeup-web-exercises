"use strict";


// counting up in Odd numbers to 49 and breaking at 27.

//prompt the user for an odd number between 1-50

var input = prompt("Please choose an odd number between 1-50");
var isNumeric = !isNaN(parseFloat(input)) && isFinite(input);
while (input === null) {
    console.log('thank you');
}
