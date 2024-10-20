// Gives current Date and time
let curr=new Date();
console.log(curr);

let date="September 24 2004 09:01";
console.log(date);

let newDate= new Date(2004, 8,24, 9); //month is started with Zero indexing so write one less value
console.log(newDate);

console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(newDate.setFullYear(2003));
console.log(newDate.getFullYear());