// 1. Number Prototype

const num=100;
console.log(num.__proto__ == Number.prototype);
console.log(Number.prototype.__proto__ == Object.prototype);
// num is a primitive number, but when accessed, Js temporarily wraps it in a Number Object, linking it to Number.prototype
// Number.prototype is itself an object and its prototype is Object.prototype


// 2. String Prototype
const str="Hello";
console.log(str.__proto__ == String.prototype);
console.log(String.prototype.__proto__ == Object.prototype);
// Similar to num, str is also primitive, so it is temporarily wrapped in a String Object and linked to String.prototype
// String.prototype is itself an object and its prototype is Object.prototype


// 3. Array Prototype
const arr=[1,2,3,4];
console.log(arr.__proto__ == Array.prototype);
console.log(Array.prototype.__proto__ == Object.prototype);
// arr is an array object and it is linked to Array.prototype
// Array.prototype inherits from Object.prototype


// 4. Function Prototype
const func= () =>{
    console.log("Hello");
};
console.log(func.__proto__ == Function.prototype);
console.log(Function.prototype.__proto__ == Object.prototype);
// func is a function, so it is linked to Function Prototype
// Every function has a prototype property which is used when the function is used a constructor
// func.prototype.__proto__ points to Object.prototype



/*
Some key concepts:

-> Objects in Javascript inherit properties of other objects via the prototype chain
-> Object.create: allows creating new objects that inherit directly from an existing object
-> Primitive Wrappers: Primitive values (like numbers and strings) are temporarily wrapped in their corresponding object types when accessing their properties or methods
-> Prototypes of Built-in Types: Each built-in type has its own prototype which itself inherits from Object.prototype
*/