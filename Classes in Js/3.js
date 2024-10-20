/*
CONSTRUCTOR:
-> It is a special method of class for creating and initialising an object instance of that class
-> It is automatically called when a class is initiated
-> A class cannot have more than one constructor as it will throw a syntax error
*/



class Human{

    // properties
    Name="Jeeya"; //public
    #age = 20; //to make it private, add "#" in front
    ht=170;

    // Creating a CONSTRUCTOR

    // private fields can also be added
    constructor(newName,newHt,newAge){
        this.Name=newName;
        this.ht=newHt;
        this.#age=newAge;
    }

    // behaviour

    walking(){
        console.log("I am Walking")
    }

    running(){
        console.log("I am Running")
    }

    printAge(){
        console.log("Age:",this.#age);// way to access the private data members
        // here, the private field can only be accessed inside the function
    }


    // Way to access private field outside the class

    // "get" function helps to access private variables
    get fetchAge(){ 
        return this.#age;
    }

    // "set" function helps to modify the values of private variables
    set modifyAge(val){
        this.#age=val;
    }
}

// Method to create an object

let obj=new Human();
console.log(obj.Name) //Method to access contents of the class through objects
console.log(obj.age)// this gives undefined as it is a private data member
console.log(obj.ht)

obj.walking();
obj.running();
obj.printAge();


// Accessing a CONSTRUCTOR
let obj2= new Human("Laksh",175,17);

console.log(obj2.Name);
console.log(obj2.ht);
console.log(obj2.fetchAge);