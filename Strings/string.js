//String Creation types:

//1. Double inverted Comas
let a="Jeeya";
console.log(a);

//2. Single inverted comas
let b='Sharma';
console.log(b);

//3. Template Strings by using back ticks
let c=`Good
Morning
Pineapple`;
console.log(c);// allows multiline strings


// Operations on Strings:

// 1. Concatenation

let d="Hello";
let e="World";
console.log(d+e);



// 2. Length of the String

let f= 'Jeeya';
console.log(f.length);



// 3. Uppercase and Lowercase

let g="Jeeya";
console.log("UpperCase: "+ g.toUpperCase());
console.log("LowerCase: "+ g.toLowerCase());

// 4. Substring

let h= "JeeyaSharma";
console.log(h.substring(2));
console.log(h.substring(2,7)); 


// 5. Split

let i="Hello How are you ?";
let j=i.split(' ');
console.log(j);

// 6. Join
console.log(j.join('__'));


// 7. Strings Are Immutable

let k="Jeeya";
k[2]="a";
console.log(k); //Value doesn't change


// 8. Trim 

let l="   Hello World   ";
console.log(l.trim()); //Removes Whitespaces from both the sides
console.log(l.trimEnd()); //Removes whitespaces from just the end of the string
console.log(l.trimStart()); //Removes whitespaces from just the starting of the string


// 9. IndexOf

let m="Hello World !!";
console.log(m.indexOf("Hello"));
console.log(m.indexOf("!"));


// 10. Replace

let n="Hello World";
console.log(n.replace('Hello','Namaste'));



// 11. Repeat

let o="Heyyaa";
console.log(o.repeat(3));