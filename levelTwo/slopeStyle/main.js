//Task 1
function collectAnimals(...animals) {
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
// ["dog", "cat", "mouse", "jackolope", "platypus"]


//Task 2
function combineFruit(fruit, sweets, vegetables) {
    return { fruit, sweets, vegetables }
}

console.log(combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]))


//Task 3
function parseSentence({ location, duration }) {
    return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence({ location: "Burly Idaho", duration: "2 weeks" }))


//Task 4
function returnFirst(items) {
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}


//Task 5
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav} , ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))


//Task 6
function combineAnimals(real, magical, mysterious) {
    const animals = [...real, ...magical, ...mysterious]
    return animals
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


//Task 7
function product(a, b, c, d, e) {
    const numbers = [a, b, c, d, e];
    return numbers.reduce((acc, number) => acc * number, 1)
}

console.log(product(1, 2, 1, 1, 2))


//Task 8
function unshift(array, ...nums) {
    return [...nums, ...array];
}


//Task 9
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        // your code
        const [firstName, lastName] = name

        return {
            name
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]