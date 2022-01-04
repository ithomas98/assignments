const readlineSync = require("readline-sync");
let hasKey = false;
let gameOver = false;

console.log("____________________________________________________________________________________________")
console.log("You're trapped in a a room with a locked door. You see a hole in the wall and not much else.")

readlineSync.setDefaultOptions({ limit: ["try the door", "reach into hole", "look for a key"] });

while(!gameOver){
    let choice = readlineSync.question("what do you do? [try the door] [reach into hole] [look for a key] \n")

    if (choice == "try the door") {
        if (hasKey == true) {
            console.log('\x1b[32m%s\x1b[0m', "You escaped!")
            console.log("____________________________________________________________________________________________")
            gameOver = true
        } else if (hasKey == false) {
            console.log("You don't have the key")
        }
    }
    else if (choice == "reach into hole") {
        console.log('\x1b[31m%s\x1b[0m', "You touch a poison needle and die")
        console.log("____________________________________________________________________________________________")
        gameOver = true
    }
    else if (choice == "look for a key") {
        if (hasKey) {
            console.log("You already found the key")
        } else {
            console.log("You look around for a bit and find the" + "\x1b[33m%s\x1b[0m", " key!")
            hasKey = true;
        }
    }
}