/*


    Day 6: Arrays

        Tasks/Activities:

            Activity 1: Array Creation and Access

                Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 
                
                Task 2: Access the first and last elements of the array and log them to the console.

            Activity 2: Array Methods (Basic)

                Task 3: Use the push method to add a new number to the end of the array and log the updated array. 
                
                Task 4: Use the pop method to remove the last element from the array and log the updated array.

                Task 5: Use the shift method to remove the first element from the array and log the updated array.

                Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.

            Activity 3: Array Methods (Intermediate)

                Task 7: Use the map method to create a new array where each number is doubled and log the new array. 
                
                Task 8: Use the filter method to create a new array with only even numbers and log the new array.

                Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

            Activity 4: Array Iteration

                Task 10: Use a for loop to iterate over the array and log each element to the console.

                Task 11: Use the forEach method to iterate over the array and log each element to the console.

            Activity 5: Multi-dimensional Arrays

                Task 12: Create a two-dimensional array (matrix) and log the entire array to the console,

                Task 13: Access and log a specific element from the two-dimensional array.


*/


// Activity 1
console.log("\nActivity 1\n");

// Task 1
console.log("\n Task 1\n");

let numberArray = [1, 2, 3, 4, 5];
console.log(`Array of numbers :- ${numberArray}`);

// Task 2
console.log("\nTask 2\n");
console.log(`First element of array is :- ${numberArray[0]}`);
console.log(`First element of array is :- ${numberArray[numberArray.length - 1]}`);

// Activity 2
console.log("\nActivity\n");

// Task 3
console.log("\nTask 3\n");

numberArray.push(6);
console.log(`Updated array after pushing number 6 to array is ${numberArray}`);

// Task 4
console.log("\nTask 4\n");

console.log(`Number poped from array is ${numberArray.pop()}`);
console.log(`Updated array after poping an element  is ${numberArray}`);

// Task5
console.log("\nTask 5 \n");

console.log(`Number removed from front of array is ${numberArray.shift()}`);
console.log(`Updated array after removing first element is ${numberArray}`);

// Task 6
console.log("\nTask 6\n");

numberArray.unshift(8);
console.log(`Updated array after adding 8 element in front is ${numberArray}`);

// Activity 3
console.log("\nActivity 3\n");

// Task 7
console.log("\nTask 7\n");

const newArr = numberArray.map((value) => {
   return value * value;
})
console.log(`Arry after using map :- ${newArr}`);

// Task 8
console.log("\nTask 8\n");
const nArr = numberArray.filter((value) => {
    return value % 2 == 0;
});
console.log(`Array after using filter :- ${nArr}`);

// Task 9
console.log("\nTask 9\n");

const sum = numberArray.reduce((acc, curr) => {
    curr = acc + curr;
    return curr;
})
console.log(`Sum of all numebers in array is :- ${sum}`);

// Activity 4
console.log("\nActivity 4\n");

//Task 10
console.log("\nTask 10\n");
console.log("All elements of array are");
for (let i = 0; i < numberArray.length; i++) { 
    console.log(numberArray[i]);
}

//Task 11
console.log("\nTask 11\n");
console.log("All elments are :- ");
numberArray.forEach((value)=>console.log(value))

// Activity 5
console.log("\nActivity 5\n");

// Task 12
console.log("\nTask 12\n");
const matrix = [[2,3,4],[3,4,5],[0,9,8]];
console.log(matrix);

// Task 13
console.log("\nTask 13\n");
console.log(matrix[2][2]);







/*
OUTPUT

Activity 1


 Task 1

Array of numbers :- 1,2,3,4,5

Task 2

First element of array is :- 1
First element of array is :- 5

Activity


Task 3

Updated array after pushing number 6 to array is 1,2,3,4,5,6

Task 4

Number poped from array is 6
Updated array after poping an element  is 1,2,3,4,5

Task 5

Number removed from front of array is 1
Updated array after removing first element is 2,3,4,5

Task 6

Updated array after adding 8 element in front is 8,2,3,4,5

Activity 3


Task 7

Arry after using map :- 64,4,9,16,25

Task 8

Array after using filter :- 8,2,4

Task 9

Sum of all numebers in array is :- 22

Activity 4


Task 10

All elements of array are
8
2
3
4
5

Task 11

All elments are :- 
8
2
3
4
5

Activity 5


Task 12

[ [ 2, 3, 4 ], [ 3, 4, 5 ], [ 0, 9, 8 ] ]

Task 13

8
*/