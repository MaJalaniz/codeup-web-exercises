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


    var person = {

    "firstName": "Jacob",
    "lastName" : " Alani"
    };
    console.log(person.firstName);
    console.log(person.lastName);

// Walkthrough portion
    /*var person = {

        firstName: "Jacob",
        lastName: " Alani"
    };
    var person {}
    person.firstName:"",
    person.lastName:""

    */
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

     person.sayHello = function() {
        console.log("Hello from " + person.firstName + person.lastName);
        //return "Hello from " + this.firstName + this.lastName
    };
    console.log(person.sayHello());






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

     var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];
        // Return discount amount
             function discountTotal(total){
                 var output = 0;
                 if (total > 200) {
                     output = total * .12
                 }
                 return output;
             }
        // display shopper information
            function displayShopperInfo(shopper) {
                 var output = "";
                 var amount = shopper.amount;
                 var discount = convertToCurrency();discountTotal();
                 output += shopper.name + " spent $" + shopper.amount.toFixed(2);
                 output += " and shopper received a discount of $" +  discountTotal(shopper.amount).toFixed(2);
                 output += " and paid $" + (shopper.amount - discountTotal(shopper.amount).toFixed(2);
            } return output;

            //console.log(displayShopperInfo(shoppers[0]));


            function displayShoppersInfo(shoppers) {
                Shoppers.forEach(function(shopper));
                console.log(displayShoppersInfo(shopper));
            }

            for (var i = 0; i < shopper.length; ++i){
                console.log(displayShopperInfo[i]);
            }
        //







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

    var booksList = [

        {
            title : "The Salmon of Doubt",
            author: {
                AuthorfirstName: "Douglas",
                AuthorlastName: " Adams"
            }
        },
        {
            Title: "The Fountainhead",
            author: {
                AuthorfirstName: "Ayn",
                AuthorlastName: " Rand"
            }
        },
        {
            Title: "Endless Forms Most Beautiful",
            author: {
                AuthorfirstName: "Shaun",
                AuthorlastName: " Carroll"
            }
        },
        {
            Title: "Your Inner Fish",
            author: {
                AuthorfirstName: "Neil",
                AuthorlastName: " Shubin"
            }
        },
        {
            Title: "The Count of Monte Cristo",
            author: {
                AuthorfirstName: "Alexander",
                AuthorlastName: " Dumas"
            }
        }
    ];
    console.log("The first book on the list is " + booksList[0].Title + " by " + booksList[0].AuthorfirstName + booksList[0].AuthorlastName);
    console.log("The second book on the list is " + booksList[1].Title + " by " + booksList[1].AuthorfirstName + booksList[1].AuthorlastName);
    console.log("The third book on the list is " + booksList[2].Title + " by " + booksList[2].AuthorfirstName + booksList[2].AuthorlastName);
    console.log("The fourth book on the list is " + booksList[3].Title + " by " + booksList[3].AuthorfirstName + booksList[3].AuthorlastName);
    console.log("The fifth book on the list is " + booksList[4].Title + " by " + booksList[4].AuthorfirstName + booksList[4].AuthorlastName);
    //console.log(booksList[0].title + booksList[0].author.authorlastName);

    booksList.forEach(function(books, i){
        var output= "";
        output =
        output += "Book # " + (i + 1) + "/n";
        output += "Title: "+ books.Title;
        output += "Author: " + books.author.firstName + books.author.lastName;
        console.log("- - - - - - - -");
    });




    // the information in an Object can layered like directories for a computer

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

    //for ( var i = 1; i <= 4; ++i) {
     //   console.log("Book # " + i + " is " + books[i]);
    //}


// object string literal var dog {} dog.names: "Tj" etc
// object array is within the {}
//

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
