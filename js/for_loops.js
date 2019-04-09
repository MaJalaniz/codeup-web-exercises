"use strict";

//var input = prompt("Enter a number between 1 and 10");
//var num1 = (showMultiplicationTable(input));

function showMultiplicationTable(num1) {
    for (var num1 = 1; num1 <= 10; ++num1) {
        console.log("7 x " + num1 + " = " + num1 * 7);

    }
}

console.log(showMultiplicationTable());

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

function stairCase(n, string) {
    string = string || "";

    if (n > 0) {
        string += "#";
        console.log(string);
        this.stairCase(n - 1, string);
    }
}

stairCase(6);




   // var i = 1;
   // while (i <= 25) {
      //  console.log((i * 2) - 1); // add -1 to get odd
       // ++i
    //}

