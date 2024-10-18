/*
CALL STACK

-> WHAT IS STACK?
Stack is a data structure which is used to store data in the LIFO (Last In, First Out) format, that is the function that was added at the last will be the first one to be removed from stack.

->WHAT IS FUNCTION CALL STACK?
It is a crucial concept in JavaScript as it represents the mechanism by which the JavaScript engine keeps track of the function calls in a program and operates on the LIFO (Last In, First Out) data structure


->When a script calls a function, it is added to the call stack and then starts carrying out the function
->Any functions that are called by that function are added to the call stack and start executing
->When the current function is finished,the interpreter takes it off the call stack and resumes execution from where it left off
->If stack takes up more space than it was assigned, a "stack overflow" error is shown
*/

// The multiple functions are saved in the call stack as follows

console.log("Call Stack is empty.")
function A(){
    console.log("A is added to call stack");
    console.log("Now calling function B");
    B();
    console.log("Execution of B is done, so it is removed from the Call stack");
    console.log("Only A is left in call stack and will now be executed, so A is also removed")
}
function B(){
    console.log("B was called by A");
    console.log("Now B is added to the Call stack");
    console.log("Now calling function C");
    C();
    console.log("Execution of C is done, so it is removed from the Call Stack");
}
function C(){
    console.log("C was called by B");
    console.log("Now C is added to the Call stack");
    console.log("Now calling function D");;
    D();
    console.log("Execution of D is done, so it is now removed from Call Stack");
}
function D(){
    console.log("D was called by C");
    console.log("Now D is added to the Call stack");
}
A();
console.log("Call stack is empty again");