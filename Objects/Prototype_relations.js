// PROTOTYPE RELATIONSHIPS

const person1={
    name:"jeeya",
    age:20,
    isAdult:true
 };

const person2=Object.create(person1);
const person3=Object.create(person2);
person2.name="Laksh";



// Checking Prototype Links
// this basically returns boolean values on the basis of the fact if we have mentioned correct prototypes or not
console.log(person3.__proto__ == person2);
console.log(person2.__proto__ == person1);
console.log(person1.__proto__ == Object.prototype);
console.log(Object.prototype.__proto__);
/*
-> person3's prototype is person2 so it returns true
-> person2's prototype is person1 so it returns true
-> person1's prototype is Object.prototype because person1 was created using object literal syntax, which automatically links to Object.prototype
-> Object.prototype's prototype is null because it is at the top of the prototype chain and does not inherit from anything
*/

// Property Ownership
console.log(person3.hasOwnProperty("name"));
console.log(person2.hasOwnProperty("name"));
console.log(person1.hasOwnProperty("age"));
/*
-> hasOwnProperty() checks if the object has the specified property directly that is not inherited
-> person3 does not have its own property so it returns false
-> person2 does have its own property so it returns true
-> similarly, person1 also has its own properties so it returns true
*/