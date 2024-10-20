// Classes in JavaScript are basically a blueprint/template to store data and create objects
// They encapsulate data by defining properties and methods, thus enabling object-oriented programming
// Classes simplify the creation of objects and inheritance, thus making code more organised and reusable
// Classes have properties and bahaviour
// Basic way of creating classes

class Human{

    // properties
    Name="Jeeya";
    age = 20;
    ht=170;

    // behaviour

    walking(){
        console.log("I am Walking")
    }

    running(){
        console.log("I am Running")
    }
}

// Method to create an object

let obj=new Human();
console.log(obj.Name) //Method to access contents of the class through objects
console.log(obj.age)
console.log(obj.ht)

obj.walking();
obj.running();