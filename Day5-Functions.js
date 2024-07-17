/*

Day 5: Functions

    Tasks/Activities:

        Activity 1: Function Declaration

            Task 1: Write a function to check if a number is even or odd and log the result to the console.

            Task 2: Write a function to calculate the square of a number and return the result.

        Activity 2: Function Expression

            Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
            
            Task 4: Write a function expression to concatenate two strings and return the result.

        Activity 3: Arrow Functions

            Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

            Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

        Activity 4: Function Parameters and Default Values

            Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
            
            Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

        Activity 5: Higher-Order Functions

            Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

            Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

*/

// Activity 1
console.log("Activity 1\n");

// Task 1
console.log("\nTask 1\n");

function checkEvenOrOdd(number){
    if(number % 2 == 0){
        console.log(`${number} is Even`);
    }else{
        console.log(`${number} is Odd`);
    }
}
checkEvenOrOdd(3);

// Task 2
console.log("\nTask 2\n");

function squareOfNumber(number){
    return number * number;
}
console.log(`Square of 4 is ${squareOfNumber(4)}`);




// Activity 2
console.log("\nActivity 2\n");

//Task 3
console.log("\nTask 3\n");
const result = function(number1,number2){
    if(number1 > number2){
        return number1;
    }
    return number2;
}

console.log(`Among 3 and 4 larger is : ${result(3,4)}`);

// Task 4
console.log("\nTask 4\n");
const concStr = function(str1,str2){
    return str1+str2;
}
console.log(`Concat of "hello" and " World!" is :${concStr("hello"," World!")}`);

//Activity 3
console.log("\nActivity 3\n");

// Task 5
console.log("\nTask 5\n");
const sum = (num1,num2) => num1 + num2;
console.log(`Sum of 5 and 9 is ${sum(5,9)}`);

// Task 6
console.log("\nTask 6\n");
const strContains = (str,char) =>{
    for (let i = 0; i < str.length; i++) {
        if(str[i] === char){
            return true;
        }
    }
    return false;
}
console.log(`Did 't' is in "Sanket" :- ${strContains("Sanket",'t')}`);

// Activity 4
console.log("\nActiivity 4\n");

// Task 7
console.log("\nTask 7\n");
function product(n1,n2=20){
    return n1*n2;
}
console.log(`Product of 2 and 4 is :- ${product(2,4)}`);

// Task 8
console.log("\nTask 8\n");

function greeting(name,age=10){
    console.log(`Hello ${name}, your age as per records is ${age}`);
}
greeting("Soham Das",20);

// Activity 5
console.log("\nActivity 5\n");

// Task 9
console.log("\nTask 9\n");

function sayHello(){
    console.log("Hello!!");
}

function printRep(func,number){
    for(let i = 0 ; i < number ; i++){
        func();
    }
}

printRep(sayHello,3);

// Task 10
console.log("\nTask 10\n");

function incrementFunc(n){
    return n++;
}

function decFunction(n){
    return n--;
}

function hof(func1,func2,value){
    let res = func1(value);
    let finalres = func2(res);
    return finalres;
}

console.log(hof(incrementFunc,decFunction,4));


/*
OUTPUT

Activity 1


Task 1

3 is Odd

Task 2

Square of 4 is 16

Activity 2


Task 3

Among 3 and 4 larger is : 4

Task 4

Concat of "hello" and " World!" is :hello World!

Activity 3


Task 5

Sum of 5 and 9 is 14

Task 6

Did 't' is in "Sanket" :- true

Actiivity 4


Task 7

Product of 2 and 4 is :- 8

Task 8

Hello Soham Das, your age as per records is 20    

Activity 5


Task 9

Hello!!
Hello!!
Hello!!

Task 10

4

*/