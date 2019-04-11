(function(){
    "use strict";
//compile each step before the For loop into one clean group

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    var names = ["Lulu", "Kale", "Basche", "Mika"];


    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
     //var names = ["Lulu", "Kale", "Basche", "Mika"];
        console.log(names.length);


    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    //console.log(numbers[0]);
    //console.log(numbers[1]);
    //console.log(numbers[2]);
    //console.log(numbers[3]);


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (var i = 0; i < names.length; i++) {
        console.log('The person at index ' + i + ' is: ' + names[i]);
    }


    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    var names = ["Lulu", "Kale", "Basche", "Mika"];

    names.foreach=(function(name) {
        console.log("Hello my name is " + names);

    });
// Foreach loop is less flexible than using a traditional For loop
// anonymous function is one without a name
// Elements can be selected within the console.log using console.log(element) or index or array
    // console.log(element, index, array) are considered placeholders
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    function first(name) {
    return name[0];
    }


    function second(name) {
    return name[1];
    }

    function last(name) {
        //return arr[arr.length -1 ];
    return name[2];
    }




})();
