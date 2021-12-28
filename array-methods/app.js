//Arrays
var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Task 1
vegetables.pop()
console.log("Task 1: " + vegetables)

//Task 2
fruits.shift()
console.log("Task 2: " + fruits)

//Task 3
var orangeIndex = fruits.indexOf("orange");
console.log("Task 3: " + orangeIndex)

//Task 4
fruits.push(orangeIndex)
console.log("Task 4: " + fruits)

//Task 5
var vegLength = vegetables.length;
console.log("Task 5: " + vegLength)

//Task 6
vegetables.push(vegLength)
console.log("Task 6: " + vegetables)

//Task 7
var food = fruits.concat(vegetables);
console.log("Task 7: " + food)

//Task 8
food.splice(4, 2)
console.log("Task 8: " + food)

//Task 9
food.reverse()
console.log("Task 9: " + food)

//Task 10
var foodString = food.join()
console.log("Task 9: " + foodString)