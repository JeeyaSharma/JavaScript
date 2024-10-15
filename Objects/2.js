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