// Arrays are Mutable

let arr_mutable=[1,2,3,4,5,6,7];
arr_mutable[3]=12;
console.log(arr_mutable);



// Length of array

let arrLength=[1,2,3,4,5,6,7,8,9,10];
console.log(arrLength.length);


// Array Methods:

// 1. PUSH (inserts value at the end)

let arrPush=['audi','bmw','mercedes'];
console.log(`Before Push Operation: ${arrPush}`);
arrPush.push('ferrari');
console.log(`After Push Operation: ${arrPush}`);

// 2.POP (removes value at the end)

let arrPop=['audi','bmw','mercedes','ferrari','rolls royce'];
console.log(`Before Pop Operation: ${arrPop}`);
arrPop.pop();
console.log(`After Pop Operation: ${arrPop}`);



// 3. SHIFT (removes first element in the array)

let arrShift=[1,2,3,4,5,6,7];
console.log(`Before Shift Operation: ${arrShift}`);
arrShift.shift();
console.log(`After Shift Operation: ${arrShift}`);



// 4. UNSHIFT (adds element on the leftmost side of the array)

let arrUnshift=[2,3,4,5,6,7];
console.log(`Before Unshift Operation: ${arrUnshift}`);
arrUnshift.unshift(1);
console.log(`After Unshift Operation: ${arrUnshift}`);



// 5.INDEXOF (returns the index of the specified element)

let arrIndexOf=[1,2,3,4,5,6,7,8];
console.log(`Index of '7' in the array [${arrIndexOf}]: ${arrIndexOf.indexOf(7)}`);


// 6.INCLUDES (tells whether a particular element is present in array or not in boolean terms)

let arrIncludes=['lily','rose','lotus','sunflower'];
console.log(arrIncludes.includes('cauliflower'));
console.log(arrIncludes.includes('lily'));


// 7.CONCAT (merges arrays)

let concat1=[1,2,3,4,5];
let concat2=["hello","hi","heyy"];
console.log(concat1.concat(concat2));
console.log(concat2.concat(concat1));


// 8.REVERSE (reverses an array)

let rev=['a','b','c','d','e','f'];
console.log(rev.reverse());


// 9.SLICE (copies a portion of an array based on the specified indexes)

let arrSlice=[1,2,3,4,5,6,7,8,9];
console.log(arrSlice.slice(3));
console.log(arrSlice.slice(2,5));


// 10. SPLICE (used for removing/replacing and adding new element in the array and it changes the originala array)

let arrSplice=[1,2,3,4,5,6,7,8];
console.log(arrSplice);
arrSplice.splice(3,3,"Jeeya","Rose");
console.log(arrSplice);
