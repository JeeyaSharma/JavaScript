// FOR-IN ---  this loop is facilitates iteration over the enumerable properties of an object

let obj={
    name:"Jeeya",
    age:20,
    city:"CHD"
};

for(const key in obj){
    console.log(key," ",obj[key]);
};

let fruits= ['apple','watermelon','mango'];

for(let index in fruits)
{
    console.log(`Index ${index}: ${fruits[index]}`);
};