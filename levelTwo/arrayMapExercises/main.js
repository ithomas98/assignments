//Task 1
function doubleNumbers(arr) {
    return arr.map(num => num * 2)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//Task 2
function stringItUp(arr) {
    return arr.map(num => String(num))
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//Task 3
function capitalizeNames(arr) {
    return arr.map(function (name) {
        const letters = name.split("")
        letters[0] = letters[0].toUpperCase()
        for (let i = 1; i < letters.length; i++) {
            letters[i] = letters[i].toLowerCase()
        }

        const fixedName = letters.join("")
        return fixedName
    })
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


//Task 4
function namesOnly(arr) {
    return arr.map(person => person.name)
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]



//Task 5
function makeStrings(arr) {
    return arr.map(function (person) {
        if (person.age < 18) {
            return person.name + " can't go"
        } else {
            return person.name + " can go"
        }
    })
}

console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie can go to The Matrix",
// "Eric Jones is under age!!",
// "Paris Hilton is under age!!",
// "Kayne West is under age!!",
// "Bob Ziroll can go to The Matrix"]


//Task 6
function readyToPutInTheDOM(arr) {
    return arr.map(person => `<h1>${person.name}<h1><h2>${person.age}<h2>`)
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
  // ["<h1>Angelina Jolie</h1><h2>80</h2>",
  // "<h1>Eric Jones</h1><h2>2</h2>",
  // "<h1>Paris Hilton</h1><h2>5</h2>",
  // "<h1>Kayne West</h1><h2>16</h2>",
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]