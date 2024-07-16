/*

    Day 4: Loops

    Tasks/Activities:

        Activity 1: For Loop

            Task 1: Write a program to print numbers from 1 to 10 using a for loop.
        
            Task 2: Write a program to print the multiplication table of 5 using a for loop.

        Activity 2: While Loop

            Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

            Task 4: Write a program to print numbers from 10 to 1 using a while loop.

        Activity 3: Do... While Loop

            Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

            Task 6: Write a program to calculate the factorial of a number using a do...while loop.

        Activity 4: Nested Loops

            Task 7: Write a program to print a pattem using nested for loops:

            *
            **
            ***
            ****
            *****

        Activity 5: Loop Control Statements

            Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

            Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

*/


// Activity 1
console.log("Activity 1");
// Task 1
console.log("\n");
console.log("Task 1");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
console.log("Task 2");
console.log("\n");

for (let j = 1; j <= 10; j++) {
    console.log(`${j} x 5 = ${j * 5}`);
}

// Activity 2 
console.log("Activity 2");
console.log("\n");
console.log("Task 3");
// Task 3


let i = 1
let sum = 0;

while (i <= 10) {
    sum += i;
    i++;
}
console.log(sum);

// Task 4
console.log("\n");
console.log("Task 4");

let num = 10;
while (num > 0) {
    console.log(num);
    num -= 1;
}


// Activity 3
console.log("Activity 3");
// Task 5
console.log("\n");
console.log("Task 5");

let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// Task 6
console.log("\n");
console.log("Task 6");
let number = 4;
let fact = 1;
do {
    fact = fact * number;
    number--
} while (number != 1);
console.log(fact);

// Activity 4 
console.log("Activity 4");
// Task 7
console.log("\n");
console.log("Task 7");
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

// Activity 5
console.log("Activity 5");
// Task 8
console.log("\n");
console.log("Task 8");
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    } else {
        console.log(i);
    }
}

// Task 9

console.log("\n");
console.log("Task 9");
for (let i = 1; i <= 10; i++) {
    if (i == 7) {
        break;
    } else {
        console.log(i);
    }
}

/*
OUTPUT

Activity 1


Task 1    
1
2
3
4
5
6
7
8
9
10        
Task 2    


1 x 5 = 5 
2 x 5 = 10
3 x 5 = 15
4 x 5 = 20
5 x 5 = 25
6 x 5 = 30
7 x 5 = 35
8 x 5 = 40
9 x 5 = 45
10 x 5 = 50
Activity 2


Task 3
55


Task 4
10
9
8
7
6
5
4
3
2
1
Activity 3


Task 5
1
2
3
4
5


Task 6
24
Activity 4


Task 7
*
**
***
****
*****
Activity 5


Task 8
1
2
3
4
6
7
8
9
10


Task 9
1
2
3
4
5
6

*/