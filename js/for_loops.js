"use strict";

//var input = prompt("Enter a number between 1 and 10");
//var num1 = (showMultiplicationTable(input));

function showMultiplicationTable(num1) {
    for (var num1 = 1; num1 <= 10; ++num1) {
        console.log("7 x " + num1 + " = " + num1 * 7);

    }
}
//Try to write out the problem as a paragraph to try and understand what the problem is asking
//for. <--Pseudo coding --> try breaking down the problem rather than all at once

//For loops are for when you have a number in mind for when to stop
//While loops are for uncertain amount of times
/*
{
var outputRow(num2, num3) {
var output = "";
output += num2 + " x " num3 + " x " + total;
return output;
}
}

function showMultiplication(num) {
var
for (var i = 1; i <= 10; ++i){
------
}
output += outputRow

return output


*/

//iterate code 10 times
// function to log if even or odd

function returnRandom() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function oddEven(num) {
    var output = "";
    outputMessage = ( num % 2 === 0) ? " is even" : " is odd";
    console.log(outputMessage);
}
 function evenOddCalculator() {
    for (var i = 1; i <= 10; ++i){
        var randNum = returnRandNum(20, 200);
        var result = isEvenOdd(randNum);

    }
    return result;
 }

 // it is better to use a return value than a console.log when ending a function
console.log(showMultiplicationTable());

// utilizing the .repeat to get the stairs effect
   // for (var i = 1; i < 10; ++i ) {
    //console.log(string(i).repeat(i));
    //}
// use var output = "";
// var (j = 0; j < i; j+= 1)h
// output += i  is very useful


// create a For loop to create a Stairs effect
/*for (var i = 1; i <= 1; ++i) {
    console.log(i)
    } for (var j = 2; j <= 2; ++j) {
        console.log(j * 11);
    } for (var k = 3; k <= 3; ++k) {
        console.log(k * 111);
    } for (var l = 4; l <= 4; ++l) {
        console.log(l * 1111);
    } for (var m = 5; m <= 5; ++m) {
        console.log(m * 11111)
    } for (var n = 6; n <= 6; ++n) {
        console.log(n * 111111);
    } for (var o = 7; o <= 7; ++o) {
        console.log(o * 11111111);
    } for (var p = 8; p <= 8; ++p) {
        console.log(p * 1111111111);
    } for (var q = 9; q <= 9; ++q) {
        console.log(q * 11111111111);
}*/
// nesting 9 For loops in each-other for stacking effect in console log

// Count down by 5 from 100

for (var i = 104; i >= 5; --i) {
    console.log(i -= 4);
}



// counting up in Odd numbers to 49 and breaking at 27.

    //prompt the user for an odd number between 1-50

    var input = prompt("Please choose an odd number between 1-50");
    var isNumeric = !isNaN(parseFloat(input)) && isFinite(input);
        while (input === null) {
            console.log('thank you');
        }


// */