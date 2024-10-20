/*
-> Inheritance refers to passing down characteristics from a parent to a child so that a new piece of code can reuse and build upon the features of an existing one
-> Js implement inheritance by using objects
-> Each object has an internal link to another object called its prototype
-> That prototype object has a prototype of its own and so on until an object is reached with "null" as its prototype
 */


// Object creation:
 const person1={
    name:"jeeya",
    age:20,
    isAdult:true
 };
 console.log(person1);
//  An object person1 has been created with properties name,age and isAdult.



// Prototype inheritance with Object.create()
const person2=Object.create(person1);
const person3=Object.create(person2);
// Now, person2 is created using Object.create(person1), which sets person1 as the prototype for person2
// Similarly, person3 is also created with person2 as its prototype
// This forms a prototype chain: person3 -> person2 -> person1



// Accessing properties via the prototype chain
console.log(person2.name);
console.log(person2.age);
console.log(person3.age);
// person2 and person3 don't have their own properties so javascript looks up the prototype chain and inherit these properties from person1



// Checking prototype link
console.log(person3.__proto__ == person2);
console.log(person2.__proto__ == person1);




// Overriding Properties
person2.name="Laksh";
console.log(person2.name);
console.log(person3.name);
/*
1. Before overriding:
-> when we access the name from person3, person3 itself doesn't have any properties
-> so it then checks person2 as person2 is its prototype but person2 also doesn't have any properties
-> so it now goes up the prototype chain to person1 which has the property called name and will display that value


2. After the Override:
-> When we wrote person2.name="Laksh"; , we create a property in person2 called name
-> now, person3 still doesn't have any properties, but person2 now does have a property and person2 is a prototype of person3
-> so, it stops looking for the property name further up in the chain and prints this property only
 */