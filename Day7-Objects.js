/*

    Day 7: Objects

        Tasks/Activities:

            Activity 1: Object Creation and Access

                Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

                Task 2: Access and log the title and author properties of the book object.

            Activity 2: Object Methods

                Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

                Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

            Activity 3: Nested Objects

                Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.

                Task 6: Access and log the name of the library and the titles of all the books in the library

            Activity 4: The this Keyword

                Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.

            Activity 5: Object Iteration

                Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.

                Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.

*/

// Activity 1
console.log("\nActivity 1\n");

// Task 1
console.log("\nTask 1\n");

let book = {
    title: "The Anatomy of a Sting",
    author: "Bhupen Patel",
    year: 2018
}
console.log(book);

// Task 2
console.log("\nTask 2\n");

console.log(`Title of book is ${book.title}`);
console.log(`Author of book is ${book.author}`);

// Activity 2
console.log("\nActivity 2\n");

// Task 3
console.log("\nTask 3\n");

book["getDetail"] = function () {
    console.log(`Title : ${book.title}, Author : ${book.author}`);
}

console.log(book);

// Task 4
console.log("\nTask 4\n");

book["updateYear"] = function (year) {
    book.year = year;
}
console.log(book);

// Activity 3
console.log("\nActivity 3\n");

// Task 5
console.log("\nTask 5\n");

let library = {
    library1: {
        name: "New York Public Library",
        books: [
            {
                title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                year: 1951
            },
            {
                title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960
            }
        ]
    },

    library2 :{
        name: "British Library",
        books:[
            {
                title: "1984",
                author: "George Orwell",
                year: 1949 
            },
            {
                title: "Pride and Prejudice",
                author: "Jane Austen",
                year: 1813
            }
        ]
    },
    library3 :{
        name: "Library of Congress",
        books:[
            {
                title: "The Great Gatsby",
                author: "F. Scott Fitzgerald",
                year: 1925
            },
            {
                title: "Moby-Dick",
                author: "Herman Melville",
                year: 1851
            }
        ]
    }
}

console.log(library);

// Task 6
console.log("\nTask 6\n");

console.log(`Name of Library : ${library.library1.name}`);

function printBooks(book){
    for (let i = 0; i < book.length; i++) {
        console.log(book[i].title);        
    }
}
console.log("Titles of all books :");
printBooks(library.library1.books)


// Activity 4
console.log("\nActivity 4\n");

// Task 7
console.log("\nTask 7\n");

book["thisMethod"] = function(){
    return `Title : ${this.title} , Year : ${this.year}`
}
console.log(book.thisMethod());

//Activity 5
console.log("\nActivity 5\n");

//Task 8
console.log("\nTask 8\n");
for (const key in book) {
    console.log(`${key} : ${book[key]}`);
}

//Task 9
console.log("\nTask 9\n");
console.log(`Objects keys : ${Object.keys(book)}`);
console.log(`Values keys : ${Object.values(book)}`);


/*

OUTPUT

Activity 1


Task 1

{ title: 'The Anatomy of a Sting', author: 'Bhupen Patel', year: 2018 }

Task 2

Title of book is The Anatomy of a Sting
Author of book is Bhupen Patel

Activity 2


Task 3

{
  title: 'The Anatomy of a Sting',
  author: 'Bhupen Patel',
  year: 2018,
  getDetail: [Function (anonymous)]
}

Task 4

{
  title: 'The Anatomy of a Sting',
  author: 'Bhupen Patel',
  year: 2018,
  getDetail: [Function (anonymous)],
  updateYear: [Function (anonymous)]
}

Activity 3


Task 5

{
  library1: { name: 'New York Public Library', books: [ [Object], [Object] ] },
  library2: { name: 'British Library', books: [ [Object], [Object] 
] },
  library3: { name: 'Library of Congress', books: [ [Object], [Object] ] }
}

Task 6

Name of Library : New York Public Library
Titles of all books :
The Catcher in the Rye
To Kill a Mockingbird

Activity 4


Task 7

Title : The Anatomy of a Sting , Year : 2018

Activity 5


Task 8

title : The Anatomy of a Sting
author : Bhupen Patel
year : 2018
getDetail : function () {
    console.log(`Title : ${book.title}, Author : ${book.author}`); 
}
updateYear : function (year) {
    book.year = year;
}
thisMethod : function(){
    return `Title : ${this.title} , Year : ${this.year}`
}

Task 9

Objects keys : title,author,year,getDetail,updateYear,thisMethod   
Values keys : The Anatomy of a Sting,Bhupen Patel,2018,function () 
{
    console.log(`Title : ${book.title}, Author : ${book.author}`); 
},function (year) {
    book.year = year;
},function(){
    return `Title : ${this.title} , Year : ${this.year}`
}
    */