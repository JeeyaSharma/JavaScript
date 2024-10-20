// Objects are dynamic in nature
// This is because the properties of objects can be changed at runtime

let obj={
    Name:"Jeeya",
    age:20,
    ht:170
};
console.log(obj);

// Now, we can add properties in the object as follows:
obj.color="blue";//this will be added to the object
console.log(obj);


// Object cloning is done by 3 methods:

// 1. By using Spread Operator (...):

let src={
    Name:"Jeeya",
    age:20,
    ht:170
};

let dest={...src};
console.log("Source: ",src);
console.log("Destination: ",dest);


// 2. By using Assign Method

let src1={
    Name:"Laksh",
    age:17,
    ht:175
};

let dest1=Object.assign({},src1);

console.log("Source:",src1);
console.log("Destination:",dest1);

// cloning more than 1 objects can also be done
let src2={
    value:12,
    str:"Hello"
};

let dest2=Object.assign({},src,src2);
console.log("2 Objects Cloned: ",dest2);



// 3. Using Iteration (loops)

let src3={
    age:20,
    ht:170,
    wt:65
};

let dest3={};

for(let key in src3){
    let newKey=key;
    let newValue=src3[key];
    // insert new key and value in dest and create a clone
    dest3[key]=newValue;
}
console.log(dest3);