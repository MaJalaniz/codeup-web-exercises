(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    //You can add spaces in between the " " so the console.log will separate them instead of mashing them together
    var person = {

    "firstName": "Jacob",
    "lastName" : " Alani"
    };
    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    var sayHello = function() {
        console.log("Hello from " + person.firstName + person.lastName);
    };
    sayHello();






    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    // var shoppers = [
    //     {name: 'Cameron', amount: 180},
    //     {name: 'Ryan', amount: 250},
    //     {name: 'George', amount: 320}
    // ];








    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [

        {
            Title : "The Salmon of Doubt",
            AuthorfirstName: "Douglas",
            AuthorlastName: " Adams"
        },

        {
            Title: "The Fountain",
            Author: "Ayn Rand"

        },

        {
            Title: "Endless Forms Most Beautiful",
            Author: "Shaun B. Carroll"

        },
        {
            Title: "Your Inner Fish",
            Author:"Neil Shubin"

        },
        {
            Title: "The Count of Monte Cristo",
            Author:"Alexander Dumas"

        }
    ];
    console.log("The first book on the list is " + books[0].Title + " by " + books[0].AuthorfirstName + books[0].AuthorlastName);
    console.log("The first book on the list is " + books[1].Title + " by " + books[1].AuthorfirstName + books[1].AuthorlastName);
    console.log("The first book on the list is " + books[2].Title + " by " + books[2].AuthorfirstName + books[2].AuthorlastName);
    console.log("The first book on the list is " + books[3].Title + " by " + books[3].AuthorfirstName + books[3].AuthorlastName);
    console.log("The first book on the list is " + books[4].Title + " by " + books[4].AuthorfirstName + books[4].AuthorlastName);




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    for ( var i = 1; i <= 4; ++i) {
        console.log("Book # " + i + " is " + books[i].title);
    }





    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
