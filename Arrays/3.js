// MAP FUNCTION

// 1. Using Arrow function

let arr1=[10,20,30,40,50];
console.log(arr1);
let ans1=arr1.map(number => {
    return number*number;
});
console.log(ans1);

// 2. Using normal functions

let arr2=[10,20,30,40,50];
console.log(arr2);
let ans2= arr2.map(Square);
console.log(ans2);

function Square(n){
    return n*n;
}




// FILTER FUNCTION

// 1. Using normal functions

let arrFilter1=[10,23,42,67,89,54,43,34];
console.log(arrFilter1);
let ansEven=arrFilter1.filter(even);
console.log(ansEven);

function even(n)
{
    if(n%2===0) return true;
    else return false;
}

// 2. Using Arrow functions

let arrFilter2=[10,23,42,67,89,54,43,34];
console.log(arrFilter2);
let ansOdd=arrFilter2.filter(number => {
    if(number%2===0) return false;
    else return true;
});
console.log(ansOdd);

let arrFilter3=["Jeeya",1,2,3,"Laksh"];
console.log(arrFilter3);
let ansString=arrFilter3.filter(value => {
    if(typeof(value) === 'string') return true;
    else return false;
});
console.log(ansString);





// REDUCE FUNCTION

let arrReduce=[10,20,30,40];
console.log(arrReduce);
let ans=arrReduce.reduce((acc,curr) => {
    return acc+curr;
},0);
console.log(ans);




// SORT FUNCTION

let arrSort=[1,4,6,3,2,9,7];
console.log(arrSort);
console.log(arrSort.sort());

// Sorting array in descending order

let arrSort2=[1,4,6,3,2,9,7];
console.log(arrSort2);
let ansSort=arrSort2.sort(function(a,b){
    return b-a;
});
console.log(ansSort);





