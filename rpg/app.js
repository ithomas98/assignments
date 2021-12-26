//Set up
const readline = require("readline-sync");
let isDead = false;
let inFight = false;
let currentEnemy = null;
let cap = "___________________________________________________________________________"

//Player Info
let inventory = "Inventory:"
let inventoryContent = ""
let health = 10
let level = 1

//Enemies
const goblin = {
    name: "Goblin",
    health: 10,
    attack: 1,
    level: 1,
}
const giant = {
    name: "Giant",
    health: 20,
    attack: 5,
    level: 4,
}
const dragon = {
    name: "Dragon",
    health: 30,
    attack: 10,
    level: 10,
}
const enemies = [goblin, giant, dragon]

//Items
const items = ["Medallion", "Tunic", "Hat", "Glove", "Monocle", "Mask", "Ring", "Toe ring", "Carrot", "Signed Cook Book", "Dusty Book", "Toad", "Fiji Water", "Lantern", "Walking Stick"]


//Intro 
console.clear()
console.log("\x1b[33m%s\x1b[0m", "Enter your name: ")
const name = readline.question("")
printInventory()

//Main Loop
while (!isDead) {
    const choice = readline.keyIn("", { hideEchoBack: true, limit: 'wpd' });

    if (choice == "w") {
        walk()
    }

    if (choice == "p") {
        printInventory()
    }

    if (choice == "d") {
        console.log("dead")
        isDead = true
    }

    //Fight Loop
    while (inFight) {
        const fightChoice = readline.keyIn("", { hideEchoBack: true, limit: 'af' });

        if (fightChoice == "a") {
            attack()
        }

        if (fightChoice == "f") {
            flee()
        }
    }
}


//Functions
function walk() {
    let enemyChance = Math.random();
    if (enemyChance > .75) {
        let index = Math.floor(Math.random() * enemies.length);
        startFight(enemies[index])
    }
}

function startFight(enemy) {
    currentEnemy = Object.create(enemy)
    currentEnemy.health = enemy.health
    console.log("\x1b[33m%s\x1b[0m", "A " + enemy.name + " appears!")
    console.log("Press [f] to continue")

    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });

    if (continueChoice == "f") {
        printFightInfo()
        console.log("\nPress [a] to attack or [f] to flee")
        inFight = true
    }
}

function attack() {
    let damage = Math.floor(Math.random() * 4)
    currentEnemy.health -= damage
    currentEnemy.health = Math.max(0, currentEnemy.health)
    printFightInfo()

    if (currentEnemy.health > 0) {
        console.log("\nPress [a] to attack or [f] to flee\n")
        console.log("You did " + damage + " damage to " + currentEnemy.name + "!")
        enemyAttack()
    }
    else {
        console.log("\x1b[32m%s\x1b[0m", "\nYou killed the " + currentEnemy.name + "!")
        giveReward()
        console.log("Press [f] to continue")

        const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
        if (continueChoice == "f") {
            inFight = false
            printInventory()
        }
    }
}

function flee() {
    let fleeChance = Math.random();

    if (fleeChance > .5) {
        inFight = false
        printFightInfo()
        console.log("\x1b[32m%s\x1b[0m", "\nYou escaped from the " + currentEnemy.name + "!\n")
        console.log("Press [f] to continue")

        const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
        if (continueChoice == "f") {
            inFight = false
            console.clear()
            printInventory()
        }

    } else {
        let fleeDamage = Math.floor(Math.random() * 3)
        health -= fleeDamage
        health = Math.max(0, health)
        printFightInfo()
        console.log("\nYou failed to escape and took " + fleeDamage + " damage!")
    }
}

function die() {
    inFight = false
    isDead = true
    console.clear()
    printFightInfo()
    console.log("\x1b[31m%s\x1b[0m", "\n You were killed by a " + currentEnemy.name + "\n")
}

function giveReward() {
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent += "-" + items[rando] + "\n"
    console.log("\nYou loot a " + items[rando] + " from the " + currentEnemy.name + "'s corpse \n")

    level += Math.floor(currentEnemy.level / 2) + 1

    health += Math.floor((10 - health) / 2 + 1)
}

function printInventory() {
    console.clear()
    console.log(cap)
    console.log("\x1b[32m%s\x1b[0m", name)
    console.log("Health: " + health)
    console.log("Lvl. " + level + "\n")
    console.log(inventory)
    console.log(inventoryContent)
    console.log(cap)
    console.log("\nPress [w] to walk or [p] to view inventory")
}

function printFightInfo() {
    console.clear()
    console.log(cap)
    console.log("\x1b[32m%s\x1b[0m", name)
    console.log("Health: " + health)
    console.log("Lvl. " + level)
    console.log("\n" + cap)
    console.log("\x1b[31m%s\x1b[0m", currentEnemy.name)
    console.log("Health: " + currentEnemy.health)
    console.log("Lvl. " + currentEnemy.level)
    console.log(cap)
}

function enemyAttack() {
    let enemyDamage = Math.floor(Math.random() * 2)
    health -= enemyDamage
    health = Math.max(0, health)

    if (health > 0) {
        console.log(currentEnemy.name + " did " + enemyDamage + " damage to you!")
    } else {
        die()
    }
}