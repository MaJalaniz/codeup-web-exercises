"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd. 3
 * - what the number plus 100 is. 1 x
 * - if the number is negative or positive. 2 x
 *
 * if what the user enters is not a number, use an alert to tell them that, and x
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

//Done with walkthrough
    function isEvenOrOdd {
    if (NaN(number)) {
        alert("Please add a number.");
    } else {
        if (number % 2 === 0) {
            alert("This number is even!");
        } else {
            alert("This number is odd!");
        }
    }
}

var go = confirm("Want to choose a number?");
if (go === true) {
    var number = parseInt(prompt("What is your number?"));
    if (NaN(number)) { ***
        alert("Please add a number.");
    } else {
        if (number % 2 === 0) {
            alert("This number is even!");
        } else {
            alert("This number is odd!");
        }
        alert("This number plus " + (number + 100) + "!")**
    }
    if (number >= 0) {
        alert("This number is positive!");
    } else {
        alert("This number is negative!");
    }
}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(color) {
    if (color.toLowerCase() === "blue") {
    return "blue is the color of the sky";
} else if (color.toLowerCase() === "red") {
    return "red as the sky";
} else if (color.toLowerCase() === "cyan") {
    return "cyan is an interesting color"
}   else {
        message = "Sorry I don't use " + color
    }
}





// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analyzeColor(randomColor);





/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColor(color) {
    var message:
    switch (color) {
        case "blue"
            message: "blue sky";
            break;
        case "red"
            message: "ruby red";

    } else if (color.toLowerCase() === "cyan") {
        return "cyan is an interesting color"
    }   else {
        message = "Sorry I don't use " + color
    }
}






/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var colorPrompt = prompt("Whats the color?");
var userInput = analyzeColorSwitch(colorPrompt);
alert(userInput);




/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckyNumber, total) {
    var finalTotal;
    switch (parseInt(luckyNumber))  {
    case
        0
    :
        finalTotal = total;
        break;
    case
        1
    :
        finalTotal = total - (total * .10);
        break;
    case
        2
    :
        finalTotal = total - (total * .10);
        break;
    case
        3
    :
        finalTotal = total - (total * .10);
        break;
    case
        4
    :
        finalTotal = total - (total * .10);
        break;
    case
        5
    :
        finalTotal = 0;
        break;
    default:
        finalTotal = total;
        break;
    }
return finalTotal;
}



/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
//Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 5  + 1);
 function promptForTotal(luckyNumber) {
     var promptedTotal = prompt("What is your lucky number?");
     var discountedTotal = calculateTotal(luckyNumber, promptedTotal);
     alert();
 }