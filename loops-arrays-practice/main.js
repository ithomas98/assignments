//Task #1
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
let count = 0;

for(var i = 0; i < officeItems.length; i++){
    if(officeItems[i] == "computer"){
        count ++
    }
}

console.log("Task #1 answer is: " + count)