/*
Tasks/Activities:

    Activity 1: Arithmetic Operations

        Task 1: Write a program to add two numbers and log the result to the console.

        Task 2: Write a program to subtract two numbers and log the result to the console. 
        
        Task 3: Write a program to multiply two numbers and log the result to the console.

        Task 4: Write a program to divide two numbers and log the result to the console.

        Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.

    Activity 2: Assignment Operators

        Task 6: Use the += operator to add a number to a variable and log the result to the console.

        Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

    Activity 3: Comparison Operators

        Task 8: Write a program to compare two numbers using > and < and log the result to the console. 

        Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

        Task 10: Write a program to compare two numbers using == and ===  and log the result to the console.

    Activity 4: Logical Operators

        Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 

        Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

        Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

    Activity 5: Ternary Operator

        Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/


// Activity1 
console.log("\n Activity 1 : Arithmetic Operations \n");
let number1 = 12;
let number2 = 6;
console.log(`${number1} + ${number2} = ${number1 + number2}`);
console.log(`${number1} - ${number2} = ${number1 - number2}`);
console.log(`${number1} * ${number2} = ${number1 * number2}`);
console.log(`${number1} / ${number2} = ${number1 / number2}`);
console.log(`${number1} % ${number2} = ${number1 % number2}`);

// Activity2
console.log("\n Activity 2: Assignment Operators \n");
let age = 12;
age += 12;
console.log(age);

age -= 6;
console.log(age);

// Activity3
console.log("\n Activity 3: Comparison Operators \n");
console.log(`4 > 3 : ${4 > 3}`);
console.log(`4 < 3 : ${4 < 3}`);
console.log(`4 >= 3 : ${4 >= 3}`);
console.log(`4 <= 3 : ${4 <= 3}`);
console.log(`4 == '4' : ${4 == '4'}`);
console.log(`4 === '4' : ${4 === '4'}`);

// Activity4
console.log("\n Activity 4: Logical Operators \n");
console.log(`(4 > 3) && (3 < 2) : ${(4 > 3) && (3 < 2)}`);
console.log(`(4 > 3) || (3 < 2) : ${(4 > 3) || (3 < 2)}`);
console.log(`!(4 > 3) : ${!(4 > 3)}`);

// Activity5
console.log("\n Activity 5: Ternary Operator \n ");
let num1 = 12;
let result = (num1 > 0 ) ? "Positive" : "Negative";
console.log(result);


/*
OUTPUT

Activity 1 : Arithmetic Operations 

12 + 6 = 18
12 - 6 = 6
12 * 6 = 72
12 / 6 = 2
12 % 6 = 0

Activity 2: Assignment Operators 

24
18

Activity 3: Comparison Operators 

4 > 3 : true
4 < 3 : false
4 >= 3 : true
4 <= 3 : false
4 == '4' : true
4 === '4' : false

Activity 4: Logical Operators    

(4 > 3) && (3 < 2) : false        
(4 > 3) || (3 < 2) : true
!(4 > 3) : false

Activity 5: Ternary Operator

Positive


*/