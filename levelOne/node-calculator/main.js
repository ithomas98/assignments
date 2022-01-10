const readline = require("readline-sync")

const num1 = readline.questionInt("Please enter your first number: ");
const num2 = readline.questionInt("Please enter your second number: ");
const operation = readline.question("Please enter the operation to perform: add, sub, mul, div: ");

if (operation == "add") {
    function add(one, two){
        return one + two
    }
    console.log("The result is: " + add(num1, num2))
}
else if (operation == "sub") {
    function sub(one, two) {
        return one - two
    }
    console.log("The result is: " + sub(num1, num2))
}
else if (operation == "mul") {
    function mul(one, two) {
        return one * two
    }
    console.log("The result is: " + mul(num1, num2))
}
else if (operation == "div") {
    function div(one, two) {
        return one / two
    }
    console.log("The result is: " + div(num1, num2))
}