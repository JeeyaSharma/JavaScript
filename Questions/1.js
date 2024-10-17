/*
Question 1: 
Create a function that with a name EmployData which has a work to take data as a paramater. 
Emplyee data - Id, Name, Designation:
*/

// Ans:

var employData= function(Id,Name,Designation){
    var employee={};
    employee.Id=Id;
    employee.Name=Name;
    employee.Designation=Designation;

    return employee;
}

console.log(employData(1,"Jeeya","Student"));
console.log(employData(2,"Laksh","Student"));