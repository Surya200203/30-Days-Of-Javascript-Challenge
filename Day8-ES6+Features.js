/*

    Day 8: ES6+ Features

        Tasks/Activities:

            Activity 1: Template Literals

                Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

                Task 2: Create a multi-line string using template literals and log it to the console.

            Activity 2: Destructuring

                Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

                Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

            Activity 3: Spread and Rest Operators

                Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

            Activity 4: Default Parameters

                Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

            Activity 5: Enhanced Object Literals

                Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

                Task 9: Create an object with computed property names based on variables and log the object to the console.

*/

// Activity 1
console.log("\nActivity 1\n");

// Task 1
console.log("\nTask 1\n");

let name = "Sanket Suryavanshi";
let age = 22;

let res = `My name is ${name} and my age is ${age}`;
console.log(res);

//Task 2
console.log("\nTask 2\n");

const multiLineString = `Manufactured By : Suryavanshi Pvt. Lmt.
Plot No. : 204
Sundaram Industrial Zone
Maharashtra`
console.log(multiLineString);

// Activity 2
console.log("\nActivity 2\n");

// Task 3
console.log("\nTask 3\n");

let numArr = [3,6,78,8];
let [firstElement, secondElement] = numArr;
console.log(`Array is : ${numArr}`);
console.log(`First Element of array is ${firstElement}`);
console.log(`Second Element of array is ${secondElement}`);

// Task 4
console.log("\nTask 4\n");

const book = {
    title : "Breach",
    author : "Nirmal John",
    year : 2017
}

const {title , author } = book;
console.log(`Title of book is "${title}"`);
console.log(`Author of book is "${author}"`);

// Activity 3
console.log("\nActivity 3\n");

// Task 5
console.log("\nTask 5\n");

let currArr = [1,2,3,4,5];
let newArr = [...currArr,6,7,8,9];
console.log(`Old array : ${currArr}`);
console.log(`New array : ${newArr}`);

// Task 6
console.log("\nTask 6\n");

function sumOfNumbers(...num){
    let sum = 0;
    for (const i of num) {
        sum += i;
    }
    return sum;
}
console.log(`Sum of 1,2,3,4,5,6 is ${sumOfNumbers(1,2,3,4,5,6)}`);
console.log(`Sum of 1,2,3 is ${sumOfNumbers(1,2,3)}`);

// Activity 4
console.log("\nActivtiy 4\n");

// Task 7
console.log("\nTask 7\n");

function product(num1,num2=1){
    console.log(`Product of ${num1} and ${num2} is ${num1*num2}`);
}
product(1);
product(2,5);

// Activtiy 5
console.log("\nActivity 5\n");

// Task 8
console.log("\nTask 8\n");

let username = "example@gmail.com";
let ageOfUser = 20;
let location = "Delhi";

const user = {
    username,
    ageOfUser,
    location
}
console.log(user);

// Task 9
console.log("\nTask 9\n");
const prop1 = "TrainName";
const value1 = "Delhi Express";
const prop2 = "TrainNumber";
const value2 = 17700;

const trainDetails = {
    [prop1] : value1,
    [prop2] : value2
}
console.log(trainDetails);


/*
OUTPUT

Activity 1


Task 1

My name is Sanket Suryavanshi and my age is 22

Task 2

Manufactured By : Suryavanshi Pvt. Lmt.
Plot No. : 204
Sundaram Industrial Zone
Maharashtra

Activity 2


Task 3

Array is : 3,6,78,8
First Element of array is 3      
Second Element of array is 6     

Task 4

Title of book is "Breach"        
Author of book is "Nirmal John"  

Activity 3


Task 5

Old array : 1,2,3,4,5
New array : 1,2,3,4,5,6,7,8,9

Task 6

Sum of 1,2,3,4,5,6 is 21
Sum of 1,2,3 is 6

Activtiy 4


Task 7

Product of 1 and 1 is 1
Product of 2 and 5 is 10

Activity 5


Task 8

{ username: 'example@gmail.com', ageOfUser: 20, location: 'Delhi' }       

Task 9

{ TrainName: 'Delhi Express', TrainNumber: 17700 }

*/