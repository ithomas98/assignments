const employees = []

function Employee(name, title, salary, status = "Full Time"){
    this.name = name
    this.title = title
    this.salary = salary
    this.status = status
}

Employee.prototype.printEmployeeForm = function(){
    console.log(this);
}

var isaac = new Employee("Isaac", "Teacher", "$3000/hour")
var ian = new Employee("Ian", "Teacher", "$3000/hour")
var gavin = new Employee("Gavin", "Teacher", "$3000/hour", "Part Time")

employees.push(isaac, ian, gavin)
console.log(employees)