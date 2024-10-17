/*
Question 4:
There is a array with user names.
Create a object(id,name,rewards) inside an array.
 user = ['Amit', 'Ajay','Mukesh'];

Rewards = 1-10 Rs (random);
output:
listofUser = [
 {id:1, name: 'Amit', reward:7 etc},
{id:2, name: 'Ajay', reward:5 etc},
{id:3, name: Deepak',reward:5 etc},
]
*/

// Ans:

let users=['Amit','Ajay',"Mukesh"];

function getUserRewards(users){
    return users.map(function(user,idx){
        return {
            id: idx+1,
            name: user,
            reward: Math.floor(Math.random()*10+1)
        };
    });
};

let usersList=getUserRewards(users);
console.log(usersList);