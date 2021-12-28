//Task 1
function capitalizeAndLowercase(string) {
    var modifiedString = string.toUpperCase() + string.toLowerCase()
    console.log("Task 1: " + modifiedString)
}

capitalizeAndLowercase("HelLo")


//Task 2
function findMiddleIndex(string) {
    var stringArr = string.split("")
    var middleIndex = Math.floor(stringArr.length / 2)
    console.log("Task 2: " + middleIndex)
}

findMiddleIndex("Hello")
findMiddleIndex("Hello World")


//Task 3
function returnFirstHalf(string){
    var stringArr = string.split("")
    var middleIndex = Math.floor(stringArr.length / 2)
    console.log("Task 3: " + string.slice(0, middleIndex))
}

returnFirstHalf("Hello")
returnFirstHalf("Hello World")


//Task 4
function capilizeAndLowercaseHalf(string){
    var stringArr = string.split("")
    var middleIndex = Math.floor(stringArr.length / 2)
    var firstHalf = string.slice(0, middleIndex)
    var secondHalf = string.slice(middleIndex, stringArr.length)
    console.log("Task 4: " + firstHalf.toUpperCase() + secondHalf)
}

capilizeAndLowercaseHalf("Hello")
capilizeAndLowercaseHalf("Hello World")