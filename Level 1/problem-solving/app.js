//Task 1
function largest(nums) {
    let highest = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > highest) {
            highest = nums[i]
        }
    }

    console.log(`Task 1: ${highest}`)
}

largest([3, 5, 2, 8, 1])


//Task 2
const matches = []

function lettersWithStrings(words, character){
    for(let i = 0; i < words.length; i++){
        const letters = words[i].split("")
        for(j = 0; j < letters.length; j++){
            if(letters[j] == character){
                matches.push(words[i])
            }
        }
    }
    console.log(`Task 2: ${matches}`)
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!")

//Task 3
function isDivisible(num1, num2){
    if(num1 % num2 == 0){
        return true
    }else{
       return false
    }
}

console.log(`Task 3: ${isDivisible(5, 2)}`)