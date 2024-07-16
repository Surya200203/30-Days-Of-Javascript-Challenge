/*

Day 3: Control Structures

    Tasks/Activities:

        Activity 1: If-Else Statements

            Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

            Task 2: Write a program to check if a person is eligible to vote (age > 18) and log the result to the console.

        Activity 2: Nested If-Else Statements

            Task 3: Write a program to find the largest of three numbers using nested if-else statements.

        Activity 3: Switch Case

            Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console. 
            
            Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

        Activity 4: Conditional (Ternary) Operator

            Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

        Activity 5: Combining Conditions

            Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console


*/

// Activity 1
console.log("Activity 1");
// Task 1
console.log("\n");
console.log("Task 1");
let number = 12;
if(number > 0){
    console.log(`${number} is Positive Number`);
}else if(number < 0){
    console.log(`${number} is Negative Number`);
}else if(number === 0){
    console.log(`Number is Zero`);
}else{
    console.log(`Please enter a valid number`);
}

// Task 2
console.log("\n");
console.log("Task 2");
let age = 15;
if(age >= 18){
    console.log(`You are eligible to vote`);
}else if( age < 18){
    console.log(`You are not eligible ro vote`);
}else{
    console.log(`Please enter vaild age !!`);
}

// Activity 2
console.log("Activity 2");
// Task 3
console.log("\n");
console.log("Task 3");

let a = 101;
let b = 105;
let c = 42;

if(a > b){
    if(a > c){
        console.log(`Among ${a}, ${b}, ${c} the largest number is ${a}`);
    }
}else if(b > c){
    console.log(`Among ${a}, ${b}, ${c} the largest number is ${b}`);
}else{
    console.log(`Among ${a}, ${b}, ${c} the largest number is ${c}`);
}

// Activity 3 
console.log("Activity 3");
// Task 4
console.log("\n");
console.log("Task 4");

day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Plz Enter vaild number to get week");
        break;

}

// Task 5
console.log("\n");
console.log("Task 5");
let score = 50;
let grade;

switch (true) {
    case (score <= 100 && score >=85):
        grade = 'A'
        break;
    case (score < 85 && score >= 70):
        grade = 'B'
        break;
    case (score < 70 && score >= 55):
        grade = 'C'
        break;
    case (score < 55 && score >= 30):
        grade = 'D'
        break;
    case (score < 30 && score >= 0):
        grade = 'F'
        break;
    default:
        grade = "Enter a vaild score";
        break;
}
console.log(grade);


// Activity 4
console.log("Activity 4");
// Task 6
console.log("\n");
console.log("Task 6");
let num = 41;
let res = (num % 2 == 0) ? "Number is Even" : "Number is Odd";
console.log(res);

// Activity 5
console.log("Activity 5");
//Task 7
console.log("\n");
console.log("Task 7");


let year = 1900;

if(year % 4 == 0){
    if(year % 100 == 0){
        if(year % 400 == 0){
            console.log("Leap Year");
        }else{
            console.log("Not a Leap Year");
        }
    }else{
        console.log("Leap year");
    }
}else{
    console.log("Not a leap year");
}

/*
OUTPUT

Activity 1


Task 1
12 is Positive Number


Task 2
You are not eligible ro vote
Activity 2


Task 3
Among 101, 105, 42 the largest number is 105
Activity 3


Task 4
Monday


Task 5
D
Activity 4


Task 6
Number is Odd
Activity 5


Task 7
Not a Leap Year
*/