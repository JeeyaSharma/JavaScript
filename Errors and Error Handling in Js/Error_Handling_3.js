// We can make our own errors using the "throw" keyword

try{
    // Reference error
    console.log(x);
}
catch(err){
    throw new Error("Bhai pehle variable ko declare toh kro tabhi value print hogi");
}