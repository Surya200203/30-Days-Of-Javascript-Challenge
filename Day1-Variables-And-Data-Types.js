/*

Day 1: Variables and Data Types

    Tasks/Activities:

    Activity 1: Variable Declaration

        Task 1: Declare a variable using var, assign it a number, and log the value to the console. 
        Task 2: Declare a variable using let, assign it a string, and log the value to the console.

    Activity 2: Constant Declaration

        Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

    Activity 3: Data Types

        Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

    Activity 4: Reassigning Variables

        Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

    Activity 5: Understanding const

        Task 6: Try reassigning a variable declared with const and observe the error.

    Feature Request:

        1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

    Achievement:

        By the end of these activities, you will:

            Know how to declare variables using var, let, and const. Understand the different data types in JavaScript

            Be able to use the typeof operator to identify the data type of a variable.

            Understand the concept of variable reassignment and the immutability of const variables.

*/


// Activty One
console.log("\n Activity One \n");

var age = 12;
console.log(age);

let nameOfStudent = "Sanket";
console.log(nameOfStudent);

// Activity Two
console.log("\n Activity Two \n");

const isActive = true;
console.log(isActive);

// Activity Three
console.log("\n Activity Three \n");

let count = 13;
console.log(typeof count);

let city = "Pune";
console.log(typeof city);

let isAvailable = false;
console.log(typeof isAvailable);

let user = {
    name : "Rohan Mallik",
    age: 22,
    city: "Delhi",
};
console.log(typeof user);

let numbers = [1,23,15,76,89,54];
console.log(typeof numbers);

// Activity Four
console.log("\n Activity Four \n");

let numberOfBooks = 12;
console.log("Variable before reassigning :- ",numberOfBooks);

numberOfBooks = 30;
console.log("Variable after reassigning :-",numberOfBooks);

// Activity Five
console.log("\n Activity Five \n")

const admin = "Soham Das";
console.log(admin);

admin = "Kartik Das";


/*
OUTPUT

Activity One 

12
Sanket

Activity Two 

true

Activity Three 

number
string
boolean
object
object

Activity Four 

Variable before reassigning :-  12
Variable after reassigning :- 30

Activity Five 

Soham Das
F:\GIt Repos\30-Days-Of-Javascript-Challenge\Day1-Variables-And-Data-Types.js:97
admin = "Kartik Das";
      ^

TypeError: Assignment to constant variable.

*/


