// another block that is quite often added is the "finally" block which runs everytime, irrespective of whether there is an error or not

try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here");
}
catch(err){
    console.log("I am Inside Catch Block");
    console.log(err);
}
finally{
    console.log("I am the Finaly Block, I run everytime");
}