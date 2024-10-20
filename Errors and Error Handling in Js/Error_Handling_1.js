// When executing a Js code, various errors can occur, so to solve them, we handle those errors with different methods

// 1. try-catch block:
// This has two blocks, one is the try code where the code which might have an error is placed and the second is the catch block with the error as its argument and basically runs when there is an error

try{
    console.log("Try block starts here");
    console.log(x);
    console.log("Try block ends here");
}
catch(err){
    console.log("I am Inside Catch Block");
    console.log(err);
}