
//PRELIMINARIES
const fruitPrelim = ["banana", "orange", "apple", "kiwi"];

//Print 0-9
for (i = 0; i < 10; i++) {
    console.log(i)
}

//Print 9-0
for (i = 9; i > -1; i--) {
    console.log(i)
}

//Print fruit array
for (var i = 0; i < fruitPrelim.length; i++) {
    console.log(fruitPrelim[i])
}


//BRONZE
const numbers = [];
const fruitBronze = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
const names = [];
const occupations = [];
const evenNames = [];
const evenOccupations = [];
const oddNames = [];
const oddOccupations = [];

//Add 0-9 to array
for (i = 0; i < 10; i++) {
    numbers.push(i)
}

//Print even numbers 0-100
for (i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//Print every other fruit
for (var i = 0; i < fruitBronze.length; i++) {
    if (i % 2 == 0) {
        console.log(fruitBronze[i])
    }
}


//SILVER
const peopleArray = [
    {
        name: "Harrison Ford",
        occupation: "Actor"
    },
    {
        name: "Justin Bieber",
        occupation: "Singer"
    },
    {
        name: "Vladimir Putin",
        occupation: "Politician"
    },
    {
        name: "Oprah",
        occupation: "Entertainer"
    }
]

//Print names
for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name)
}

//Push names to nameArray and occupations into occupationArray
for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name)
    occupations.push(peopleArray[i].occupation)
}

//Every other name and occupation craziness
for (var i = 0; i < peopleArray.length; i++) {
    if (i % 2 == 0) {
        evenNames.push(peopleArray[i].name)
        evenOccupations.push(peopleArray[i].occupation)
    } else {
        oddNames.push(peopleArray[i].name)
        oddOccupations.push(peopleArray[i].occupation)
    }

}
console.log(evenNames)
console.log(evenOccupations)
console.log(oddNames)
console.log(oddOccupations)


//GOLD

//Create 0'd 3x3 matrix
const gridOne = new Array(3);
for(var i = 0; i < gridOne.length; i++){
    gridOne[i] = new Array(3)
    for(var j = 0; j < gridOne[i].length; j++){
        gridOne[i][j] = 0
    }
}

//Create 012012012 3x3 matrix
const gridTwo = new Array(3);
for(var i = 0; i < gridTwo.length; i++){
    gridTwo[i] = new Array(3)
    for(var j = 0; j < gridTwo[i].length; j++){
        gridTwo[i][j] = i
    }
}

//Create 012012012 3x3 matrix
const gridThree = new Array(3);
for(var i = 0; i < gridThree.length; i++){
    gridThree[i] = new Array(3)
    for(var j = 0; j < gridThree[i].length; j++){
        gridThree[i][j] = j
    }
}

//X out a grid
const gridX = new Array(3);
for(var i = 0; i < gridX.length; i++){
    gridX[i] = new Array(3)
    for(var j = 0; j < gridX[i].length; j++){
        gridX[i][j] = "x"
    }
}