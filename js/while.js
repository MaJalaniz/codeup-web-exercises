

// While Loop question 3
var i = 2;
var n = 1;
while(n < 17) {
 console.log(i ** n);
++n
}
/*
The loop above^^^ can be done this way too vvv

while( i <= 65536)
i = i * 2
console.log(i);


*/

// if the console.log is placed outside of the function body, it will still execute but not
// the run the loop. but will


// Do While Loop question 4

//var allCones = Math.floor(Math.random() * 50) + 50;
//var requestCones = Math.floor(Math.random() * 5) + 1;
//
do {
    var allCones = Math.floor(Math.random() * 50) + 50;
    var requestCones = Math.floor(Math.random() * 5) + 1;
    var totalLeft = allCones - requestCones;

    if (requestCones >= 5) {
        console.log("Here is your " + requestCones + " cones");

    } else if (requestCones <= 5) {
        console.log("I cannot give you that many cones because I only have " + requestCones + " left!");

    } else if (requestCones === 5) {
        console.log("Here is the total cones left " + totalLeft);
    }
// This code will log if you can or cannot buy cones plus the amount
} while (allCones === 100);

//else if format on the body

//do {
  //  console.log('5 cones sold');
//} while (limitCones === 5);



