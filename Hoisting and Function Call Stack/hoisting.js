/*
Hoisting:
it is a process in which Variables (declared using the var keyword) and Functions are brought to the top in their respective scopes

1. Function Hoisting:
In this, a function can be declared anywhere in a respective scope and even if the function is called before declaring/defining it, the function will still execute like the normal process of declaring and defining the function first and then calling it. This is what happens due to hoisting that is, basically it doesn't really matter if the function is called before or after declaring/defining the function as it will always be placed at the top in its respecctive scope.


2. Variable Hoisting:
This is applicable only for variables declared using the 'var' keyword. In this, if the variable is called/printed before declaring it, the output will print 'undefined' as only the variable declaration part is brought to the top of its respective scope and not the definition/the value assigned to it. The variable which is only declared doesn't have any value/definition, so it is undefined


3. Variable Hoisting for variables declared using 'let' and 'const' keywords:
In this if we try to call/use the variable before declaring it, it will throw an error.


4. Function Hoisting Using Function Expression:
Similar to 'let' and 'const', Function Expressions also throw an error when we call the function before declaring it.


5.Class Hoisting:
This is also not possible and will throw an error.
*/


// Function Hoisting:

sayMyName("Jeeya"); // This works
function sayMyName(str){
    console.log(str);
}




// Variable Hoisting:

// 1. Using "var" keyword
console.log(number); //gives undefined as its output
var number=10;
console.log(number);

// 2. Using "let" keyword
console.log(num); // Throws a reference error, as it cannot be accessed before initialisation
let num=23;

// 3. Using "const" keyword
console.log(n); //Throws a refrence error, as it cannot be accessed before initialisation
const n=10;





// Function Hoisting Using Function Expression:


// 1. Using "var":

console.log(greeting); //This doesn't throw any error but has 'undefined' as its output
var greeting=function(){
    console.log('Heyloooo');
};


// 2. Using 'let'/'const':
console.log(wishes); //Throws a reference error, as it cannot be accessed before initialisation
let wishes= () => {
    console.log("Namaste");
}


