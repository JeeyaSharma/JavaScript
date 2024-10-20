/*
DEFAULT PARAMETERS:
-> they allow names paramters to be initialized by a default value if no value or undefined is passed as a value
 */



// Single default parameter
function sayName(Name="Iron Man"){
    console.log("My name is",Name);
}
//if no value is passed in the function, it will give undefined
sayName("Jeeya");
// but if we pass a default value, then it will be used in the case where no paramter is passed in the function
sayName();



// Multiple default parameters
// multiple default parameters can also be added
function sayMyName(fName="Jeeya",lName="Sharma"){
    console.log("Full Name: ",fName,lName);
}

sayMyName();// default values are used when no parameters are passed



// Default paramters for when the parameters are dependent on one another

function myName(fname,lname=fname.toUpperCase()){
    console.log("Full Name: ",fname,lname);
}
myName("Jeeya");



// An Object can also be added as a Default Parameter

function Name(value={Name:"Jeeya",age:20}){
    console.log("Name is: ",value);
}
Name();

// Arrays can also be added as a default parameter

function thisIsName(value=["Jeeya","Sharma"]){
    console.log("Name: ",value);
}
thisIsName();

// If we pass "null" as a parameter while calling the function, then "null" is used and default paramter will not be used
// whereas when we use "undefined" as a parameter while calling the function, then the default parameter will be used



// we can also use functions as a default parameter

function getAge(){
    return 20;
}

function values(name="Jeeya",age=getAge()){
    console.log(name,age);
}
values();