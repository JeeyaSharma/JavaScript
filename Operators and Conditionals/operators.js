// Arithmetic Operators

let a=10;
let b=5;
// addition
console.log("Addition: "+(a+b));
// subtraction
console.log("Subtracion:"+(a-b));
// multiplication
console.log("Multiplication: "+(a*b));
// division
console.log("Division: "+(a/b));
// modulos operator
console.log("Remainder: "+(a%b));
// exponent
console.log("Exponent: "+ (a**b));
// Increment
let c=2;
console.log("Pre-increment of 2: "+ (++c));
let d=2;
console.log("Post-Increment of 2: "+(d++));
// Decrement
let e=3;
console.log("Pre-decrement of 3: "+ (--e));
let f=3;
console.log("Post-decrement of 3: "+ (f--));

// Assignment Operator
let g=2; // '=' is the assignment operator here

// Comparison Operator
let h=2;
let i=3;
console.log("2>3 :" + (2>3));
console.log("2<3 :" + (2<3));
console.log("2>=3 :" + (2>=3));
console.log("2<=3 :" + (2<=3));
console.log("2!=3 :" + (2!=3));
// Loose Equality
console.log("'5' == 5: "+ ('5'==5));
// Strict Equality
console.log("'5' === 5: "+('5' === 5));


// Logical Operators
let a1=true;
let a2=true;
let a3=false;
let a4=false;

// AND --- &&

console.log(a1 && a2); //will give true as all are true
console.log(a1 && a2 && a3); //will give false as one value is false

// OR --- ||
console.log(a1 || a2 || a3); //will give true as all are not false
console.log(a3 || a4); //will give false as all are false

// NOT --- !
console.log(!a2);
console.log(!a4);

// Bitwise Operator
console.log("2 & 5: "+(2&5)); //Bitwise AND --- &
console.log("2 | 5: "+(2|5)); //Bitwise OR --- |
console.log("Not (0): "+(~(0))); //Bitwise NOT --- ~
console.log("Left Shift: "+(2<<1)); //Left Shift, Number is multiplied by 2
console.log("Left Shift: "+(2<<2)); //Number is multiplied by 2 twice
console.log("Right Shift: "+(8>>1)); //Right Shift, Number is divided by 2
console.log("Right Shift: "+(8>>2)); //Number is divided by 2 twice

// Ternary Operator
let age1=25;
let age2=17;

(age1>18) ? console.log("Can vote") : console.log("Cannot Vote");
(age2>18) ? console.log("Can Vote") : console.log("Cannot Vote");