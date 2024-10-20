// Practicing classes concepts

class Human{
    fullName="Jeeya Sharma";
    age=20;
    #height=170;

    constructor(newFullName,newAge,newHeight){
        this.fullName=newFullName;
        this.age=newAge;
        this.#height=newHeight;
    }

    Walking(){
        console.log("Jeeya is Walking");
    }

    Running(){
        console.log("Jeeya is Running");
    }

    #Studying(){
        console.log("Jeeya is Studying");
    }

    get fetchHeight(){
        return this.#height;
    }

    get fetchStudying(){
        return this.#Studying;
    }

    set modifyHeight(value){
        this.#height=value;
    }
}

let obj= new Human();
console.log(obj.fullName);
console.log(obj.age);
console.log(obj.height); //height is a private field so the output will be undefined
obj.Walking();
obj.Running();
// obj.Studying(); // this gives an error as this function is a private field
console.log(obj.fetchHeight);
obj.fetchStudying();
obj.modifyHeight=175;
console.log(obj.fetchHeight);


let obj2= new Human("Laksh",17,175);
console.log(obj2.fullName);
console.log(obj2.age);
console.log(obj.fetchHeight);