/*
Question 3: 
Write a function to filter out all the perfect square from given list
of number:
Example: [1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
Ans: [1,4,9,16,36,49]
*/

// Ans:

function isPerfectSquare(num){
    return Number.isInteger(Math.sqrt(num));
};

function filterPerfectSquare(arr){
    return arr.filter(isPerfectSquare);
};

const numbers=[1,2,3,4,5,6,7,8,9,10,11,16,18,20,36,40,49];
console.log(filterPerfectSquare(numbers));