// Creation of Objects

let obj = {
    name: "Jeeya",
    age: 20,
    height: "5ft 7in",
    greet: function(){
        console.log("Yoooo!!!!");
    }
};

console.log(obj);
// Accessing the function from the object
obj.greet();

// Checking the type of obj

console.log(typeof(obj));

// Accessing the object value
console.log(obj.name);
console.log(obj.age);
console.log(obj.height);

// Change Object Value
obj.name="Laksh";
obj.age=17;
obj.height="5ft 9in";
console.log(obj);


// Creating an object using Constructors
const obj3= new Object();
obj3.name="Jeeya";
console.log(obj3);
console.log(typeof(obj3));