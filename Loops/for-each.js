// FOR-EACH --- this loop is used to traverse and use operations on every single element of the array

let arr=[1,2,3,4,5];

// Using Traditional For Loop

// let length=arr.length;
// console.log(arr);
// console.log(`Length: ${length}`);

// for(let index=0;index<length;index++)
// {
//     console.log(arr[index]);
// };

// Using For-Each Loop

arr.forEach((value,index) => {
    console.log(`Number: ${value}  Index: ${index}`);
});