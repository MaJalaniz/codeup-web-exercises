"use strict";

console.log("Hello from external JavaScript!");


alert("Welcome to my website!");
var userInput = prompt('What is your favorite color?');
alert("What a coincidence " + userInput + " is my favorite color too!");
console.log('The user entered: ' + userInput);


//var Mermaid = 3; var Bear = 5; var Herc = 1;
var moviePrice = 3;

var  movie1 = prompt('How many days would like to rent The Little Mermaid?');
var  movie2 = prompt('How many days would like to rent Brother Bear?');
var movie3 = prompt('How many days would you like to rent Hercules?');
var totalCost= ((movie1 *= moviePrice)+(movie2 *= moviePrice)+(movie3 *= moviePrice));
alert("The total cost comes out to " + totalCost + " dollars.");

console.log(totalCost);
//console.log((Mermaid *= 3) + (Bear *= 3) + (Herc *= 3));



//var Google = 400; var Amazon = 380; var Facebook = 350;

var googlePay = prompt('How much does Google pay/hr?);
var amazonPay = prompt('How much does Amazon pay/hr?');
var facebookPay = prompt('How much does Facebook pay/hr?');

var hoursGoogle = prompt('How many hours did you work at Google?');
var hoursAmazon = prompt('Then how many at Amazon?');
var hoursFacebook = prompt(' And at Facebook?');
var payWeek = ((googlePay *= hoursGoogle)+(amazonPay *= hoursAmazon)+(facebookPay *= hoursFacebook));

alert("You got paid " + payWeek + " dollars this week!");
console.log((googlePay *= 6)+(amazonPay *= 6)+(facebookPay *=10));



var Room = 20; var schedule = 6;
// No numbers used in question 3 part 3//
var classSize = confirm("Is the class full? if not please press cancel");
var classSchedule = confirm("Does it conflict with the current schedule?");
var enrollmentStatus = !classSize && !classSchedule;
alert("Student enrollment status: " + enrollmentStatus);

//((Room <= 20) && (schedule <= 6)) //Can take the class
//((Room >= 20) && (schedule >= 6)) //Cannot take the class
//((Room = 20) && (schedule <= 6)) //Cannot take the class
//((Room != 20) && (schedule >= 6)) //Cannot take the class



//var amount = 2; var memberStatus = true; var offer = true;

//((amount > 2) && (memberStatus = false) && (offer = true)) //More than two items and valid offer
//((amount > 2) && (memberStatus = false) && (offer = false)) //More than two items and offer is not valid
//((amount = 0) && (memberStatus = true) && (offer = true)) //Premium member and offer is valid
//((amount = 0) && (memberStatus = true) && (offer = false)) //Premium member and offer is not valid

var itemsHere = prompt('How many items did you buy?');
var offerDate = prompt("Is the offer valid?");
var membership = confirm("Are you a premium member?");
 ((itemsHere > 2) || (memberShip = true) || (offerDate =true));


