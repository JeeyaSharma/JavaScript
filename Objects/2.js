// object inside an object

let users={
    user1 : {
        name: "Jeeya",
        age: {
            user2: {
                name: "Laksh",
                age: 17
            }
        }
    }
};
console.log(users);
console.log(users.user1);
console.log(users.user1.age.user2.name);

let users2={
    user1:{
        name: "Jeeya",
        age: 20
    },
    user2:{
        name: "Sidak",
        age: 19
    }
};
console.log(users2);
console.log(users2.user2);
console.log(users2.user1);
console.log(users2.user1.name);


// Merge objects
let obj1={name1: "Jeeya",age:20};
obj2={name2:"Laksh",age:17};
obj3={...obj1,...obj2};
console.log(obj3);
obj4=Object.assign(obj1,obj2);
console.log(obj4);