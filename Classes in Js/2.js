/*
-> Public Data Member:
It is set defaultly and what it does is that basically the contents of the class are able to be accessed from anywhere in the code, be it inside the class or outside the class.

-> Private Data Member:
If a particular part of code inside a class is set to private, then it can only be accessed inside the class it is a part of.
*/

class Human{

    // properties
    Name="Jeeya"; //public
    #age = 20; //to make it private, add "#" in front
    ht=170;

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