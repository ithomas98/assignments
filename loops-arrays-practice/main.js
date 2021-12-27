//Task #1
//Loop through the following array and count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer", "computer"];
var count = 0;

for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] == "computer") {
        count++
    }
}

console.log("Task #1 answer: " + count + "\n")

//Task #2
//Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.
var madMaxFans = [
    {
        name: "Mike",
        age: 12,
        gender: "male",
        pronoun: "him"
    }, {
        name: "Madeline",
        age: 80,
        gender: "female",
        pronoun: "her"
    }, {
        name: "Cheryl",
        age: 22,
        gender: "female",
        pronoun: "her"
    }, {
        name: "Sam",
        age: 30,
        gender: "male",
        pronoun: "him"
    }, {
        name: "Suzy",
        age: 4,
        gender: "female",
        pronoun: "her"
    }
]

console.log("Task #2 answer:")
for (var i = 0; i < madMaxFans.length; i++) {
    if (madMaxFans[i].age >= 18) {
        console.log(madMaxFans[i].name + " is old enough to see Mad Max, let " + madMaxFans[i].pronoun + " in.")
    } else {
        console.log(madMaxFans[i].name + " is not old enough to see Mad Max, don't let " + madMaxFans[i].pronoun + " in.")
    }
}

//Bonus Task
//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array `[2, 3, 2]` would toggle the button 7 times.
//The light is off to start with. Log to the console whether or not the light is on at the end.

var numbers = [2, 5, 435, 4, 3];
var toggleCount = 0;

for (i = 0; i < numbers.length; i++) {
    toggleCount += numbers[i]
}

console.log("\nBonus Task Answer:")
if(toggleCount % 2 == 0){
    console.log("The light is off.\n")
}else{
    console.log("The light is on.\n")
}
