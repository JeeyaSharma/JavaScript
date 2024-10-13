// VAR:

// This is in global scope so this works everywhere in the whole code

var age=25;

if(true){
    console.log(age);
}

function solve(){
    var age=25;
    console.log(age);
}
// If we declare a variable using "var" keyword inside a function, then its scope lies just inside the curly braces of the functiona and if we want to use it outside the function, we won't be able to use it
// var is function scoped
console.log(age);
solve();

// var can be redeclared and redefined
// makes debugging difficult
var x=10;
console.log('Initial Value: ' + x);
var x=20;
console.log('Redeclared Value: ' + x);




// LET:
// variables created with 'LET' keyword are block scoped
// Cannot be redeclared but can be redefined
{
    let a=10;
    console.log(a);
}


// CONST:
// const can neither be redeclared nor be redefined
const a=10;
console.log(a);


// Var is never used because of how inconvenient it is. Let is the most used way to declare a variable and use const only when a constant value is required in the code