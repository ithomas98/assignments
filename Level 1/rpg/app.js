//Set up
const readline = require("readline-sync");
let isDead = false;
let inFight = false;
let currentEnemy = null;
let cap = "___________________________________________________________________________"

//Player Info
let inventory = "Inventory:"
let inventoryContent = []
let health = 20
let level = 1

//Enemies
const rat = {
    name: "rat",
    health: 5,
    attack: 1,
    level: 1,
}
const goblin = {
    name: "Goblin",
    health: 10,
    attack: 2,
    level: 2,
}
const bandit = {
    name: "Bandit",
    health: 15,
    attack: 3,
    level: 3,
}
const bear = {
    name: "Bear",
    health: 30,
    attack: 3,
    level: 10,
}
const giant = {
    name: "Giant",
    health: 20,
    attack: 4,
    level: 15,
}
const dragon = {
    name: "Dragon",
    health: 30,
    attack: 5,
    level: 25,
}
const warlock = {
    name: "Warlock",
    health: 20,
    attack: 10,
    level: 30,
}
const enemies = [rat, goblin, bandit, bear, giant, dragon, warlock]

//Items
const items = ["Medallion", "Tunic", "Hat", "Glove", "Monocle", "Mask", "Ring", "Toe ring", "Carrot", "Signed Cook Book", "Dusty Book", "Toad", "Water Bottle", "Lantern", "Walking Stick", "Carton of Eggnog", "Turkey Feather", "Lucky Totem", "Compass", "Firestarter", "Map", "Jar of Jam", "Sock", "Cloak", "Torch", "Croissant", "Pouch", "Harmonica"]

//Encounters
const encounters = [
    //Encounters that add items to inventory
    {
        name: "gift",
        type: "addItem",
        msg: "You happen upon some friendly villagers. They offer you a ",
        num: items.length
    }, {
        name: "treasureCrypt",
        type: "addItem",
        msg: "You find an old treasure chest in a crypt and find a ",
        num: items.length
    }, {
        name: "treasureRuins",
        type: "addItem",
        msg: "While taking shelter in some ancient ruins, you find a secret treasure room and pick up a ",
        num: items.length
    }, {
        name: "tavernWin",
        type: "addItem",
        msg: "You gamble in a tavern and win a ",
        num: items.length
    },

    //Encounters that modify player health
    {
        name: "healer",
        type: "modifyHealth",
        msg: "A wandering healer crosses your path! They tend to your wounds and your health increases by ",
        num: 10
    }, {
        name: "camp",
        type: "modifyHealth",
        msg: "You pitch a tent and camp for the night. You rest and your health increases by ",
        num: 5
    }, {
        name: "hunt",
        type: "modifyHealth",
        msg: "You spend the afternoon hunting and kill a pigeon. The hot meal heals you by ",
        num: 5
    },

    //Encounters that modify player level
    {
        name: "oldMan",
        type: "modifyLevel",
        msg: "At the top of a hill you find a wise old man. He imparts his secrets and you level up by ",
        num: 5
    }, {
        name: "library",
        type: "modifyLevel",
        msg: "You stumble across an old library full of ancient wisdom and level up by ",
        num: 5
    },
    //Encounters that just say something
    {
        name: "badOmen",
        type: "message",
        msg: "You spot a dead goose. A bad omen."
    }, {
        name: "goodOmen",
        type: "message",
        msg: "A leaf falls on your head. A good omen!"
    }, {
        name: "goodOmen",
        type: "message",
        msg: "A leaf falls on your head. A good omen!"
    }, {
        name: "drunk",
        type: "message",
        msg: "You drink too much at a tavern and wake up in a ditch"
    }
]

//Final Stats
let enemiesKilled = 0;
let stepsTaken = 0;
let damageDealt = 0;
let damageTaken = 0;
let battlesFled = 0;


//Intro 
console.clear()
console.log("You are the protector of a small village surrounded by dangerous wilderness. Patrol the land to keep your people safe. \n")
console.log("\x1b[33m%s\x1b[0m", "Enter your name: ")
const name = readline.question("")
printPlayerInfo()

//Main Loop
while (!isDead) {
    readline.setDefaultOptions({limit: ["w", "p", "print", "q", "quit"]});
    const choice = readline.question("");

    if (choice == "w") {
        walk()
    }

    if (choice == "p" || choice == "print") {
        printPlayerInfo()
    }

    if (choice == "q" || choice == "quit") {
        console.log("Quitting")
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
    //Determine chance of an enemy attack
    let encounterChance = Math.random();
    if (encounterChance > .75) {
        let index = Math.floor(Math.random() * enemies.length);
        startFight(enemies[index])
    }

    //Determine chance of random encounter
    if (encounterChance < .1) {
        randomEncounter()
    }

    //Add step to final stats
    stepsTaken++
}

function startFight(enemy) {
    //Create enemy and set as current
    currentEnemy = Object.create(enemy)
    currentEnemy.health = enemy.health
    console.log("\x1b[33m%s\x1b[0m", `A ${enemy.name} appears!`)

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printFightInfo()
        console.log("\nPress [a] to attack or [f] to flee")
        inFight = true
    }
}

function attack() {
    //Determine random damage and apply to enemy
    let damage = Math.floor(Math.random() * level) + 1
    currentEnemy.health -= damage
    currentEnemy.health = Math.max(0, currentEnemy.health)
    printFightInfo()

    //Give fight options and determine outcome of attack
    if (currentEnemy.health > 0) {
        console.log("\nPress [a] to attack or [f] to flee\n")
        console.log(`You did ${damage} damage to ${currentEnemy.name} !`)
        enemyAttack()
    }
    else {
        console.log("\x1b[32m%s\x1b[0m", `\nYou killed the ${currentEnemy.name} !`)
        giveReward()
        console.log("Press [f] to continue")

        const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
        if (continueChoice == "f") {
            inFight = false
            printPlayerInfo()
        }
    }

    //Add damage dealt to final stats
    damageDealt += damage
}

function flee() {
    //Determine if fleeing is successful
    let fleeChance = Math.random();
    if (fleeChance > .5) {
        inFight = false
        printFightInfo()
        console.log("\x1b[32m%s\x1b[0m", `\nYou escaped from the ${currentEnemy.name} !\n`)

        //Add successful flee to final stats
        battlesFled++

        //Prompt player to press button to continue
        console.log("Press [f] to continue")
        const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
        if (continueChoice == "f") {
            inFight = false
            console.clear()
            printPlayerInfo()
        }

    } else {
        //Take damage from unsuccessful flee attempt
        let fleeDamage = Math.floor(Math.random() * 3) + 1

        health -= fleeDamage
        health = Math.max(0, health)

        //Determine if player is killed by flee damage
        if (health > 0) {
            printFightInfo()
            console.log("\nPress [a] to attack or [f] to flee")
            console.log(`\nYou failed to escape and took ${fleeDamage} damage!`)
        } else {
            die()
        }


        //Add flee damage to final damage taken stat
        damageTaken += fleeDamage
    }
}

function die() {
    //End loops and send death message
    console.clear()
    console.log("\x1b[31m%s\x1b[0m", `\nYou were killed by a ${currentEnemy.name} and failed to protect the village.\n`)

    //Show game stats
    console.log("\x1b[33m%s\x1b[0m", "------- Game Stats -------")
    console.log(`Player level: ${level}`)
    console.log(`Distance walked: ${stepsTaken} steps`)
    console.log(`Enemies killed: ${enemiesKilled}`)
    console.log(`Damage taken: ${damageTaken}`)
    console.log(`Damage dealt: ${damageDealt}`)
    console.log(`Battles fled: ${battlesFled}\n`)

    //Prompt player to press button to quit
    console.log("Press [f] to quit")
    const quitChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (quitChoice == "f") {
        inFight = false
        isDead = true
        console.clear()
    }
}

function giveReward() {
    //Determine random item and add to inventory
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent.push(`-${items[rando]}`)
    console.log(`You loot a ${items[rando]} from the ${currentEnemy.name}'s corpse.\n`)

    //Add levels, health, and increase kill count
    level += Math.floor(currentEnemy.level / 2) + 1
    health += Math.floor((10 - health) / 2 + 1)
    enemiesKilled++
}

function printPlayerInfo() {
    //Show current player information
    console.clear()
    console.log(cap)
    console.log("\x1b[32m%s\x1b[0m", name)
    console.log(`Health: ${health}`)
    console.log(`Lvl. ${level} \n`)
    console.log(inventory)
    for (let i = 0; i < inventoryContent.length; i++) {
        console.log(inventoryContent[i])
    }
    console.log(cap)
    console.log("\nPress [w] to take a step or [p] to view inventory")
}

function printFightInfo() {
    //Show current fight information
    console.clear()
    console.log(cap)
    console.log("\x1b[32m%s\x1b[0m", name)
    console.log(`Health: ${health}`)
    console.log(`Lvl. ${level}`)
    console.log(`${cap}\n${cap}`)
    console.log("\x1b[31m%s\x1b[0m", currentEnemy.name)
    console.log(`Health: ${currentEnemy.health}`)
    console.log(`Lvl. ${currentEnemy.level}`)
    console.log(cap)
}

function enemyAttack() {
    //Determine random damage and take away from health
    let enemyDamage = Math.floor(Math.random() * currentEnemy.attack)
    health -= enemyDamage
    health = Math.max(0, health)

    //Determine if player is killed by hit
    if (health > 0) {
        console.log(`${currentEnemy.name} did ${enemyDamage} damage to you!`)
    } else {
        die()
    }

    //Add damage taken to final stats
    damageTaken += enemyDamage
}

function randomEncounter() {
    //Pick random event
    let encounterIndex = Math.floor(Math.random() * encounters.length);
    let encounter = encounters[encounterIndex];
    let randomNum = Math.floor(Math.random() * encounter.num)

    if (encounter.type == "message") {
        //Print message
        console.log("\x1b[33m%s\x1b[0m", encounter.msg)

    } else if (encounter.type == "addItem") {
        //Add item to inventory and print message
        console.log("\x1b[33m%s\x1b[0m", encounter.msg + items[randomNum] + ".")
        inventoryContent.push("-" + items[randomNum])

    } else if (encounter.type == "modifyHealth") {
        //Modify health and print message
        console.log("\x1b[33m%s\x1b[0m", encounter.msg + (randomNum + 1) + ".")
        health += (randomNum + 1)

    } else if (encounter.type == "modifyLevel") {
        //Modify level and print message
        console.log("\x1b[33m%s\x1b[0m", encounter.msg + (randomNum + 1) + ".")
        level += (randomNum + 1)
    }

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}



/* Old Encounter System

//Recieve random gift from villagers
if (encounterIndex == 0) {
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent += "-" + items[rando] + "\n"
    console.log("\x1b[33m%s\x1b[0m", "You happen upon some friendly villagers. They offer you a " + items[rando] + " as a gift.")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Heal random amount from healer
if (encounterIndex == 1) {
    let rando = Math.floor(Math.random() * 5) + 1
    health += rando
    console.log("\x1b[33m%s\x1b[0m", "A wandering healer crosses your path! They tend to your wounds and heal you by " + rando + " points.")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//See a bad omen
if (encounterIndex == 2) {
    console.log("\x1b[33m%s\x1b[0m", "You spot a dead goose. A bad omen.")
}

//See a good omen
if (encounterIndex == 3) {
    console.log("\x1b[33m%s\x1b[0m", "A leaf falls on your head. A good omen!")
}

//Camp and heal a random amount
if (encounterIndex == 4) {
    let rando = Math.floor(Math.random() * 5) + 1
    health += rando
    console.log("\x1b[33m%s\x1b[0m", "You pitch a tent and camp for the night. You rest and heal by " + rando + " points.")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Trip and fall
if (encounterIndex == 5) {
    let rando = Math.floor(Math.random() * 5) + 2
    if (health > 7) {
        health -= rando
        console.log("\x1b[33m%s\x1b[0m", "You stumble into a massive pit and lose " + rando + " health points.")
    } else {
        level -= rando
        level = Math.max(1, level)
        console.log("\x1b[33m%s\x1b[0m", "You trip over a stump and feel like a real dunce.")
    }


    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Meet a wise old man and level up
if (encounterIndex == 6) {
    let rando = Math.floor(Math.random() * 5) + 1
    level += rando
    console.log("\x1b[33m%s\x1b[0m", "At the top of a hill you find a wise old man. He imparts his secrets and you level up by " + rando + " points.")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Go hunting and gain health
if (encounterIndex == 7) {
    let rando = Math.floor(Math.random() * 5) + 1
    health += rando
    console.log("\x1b[33m%s\x1b[0m", "You spend the afternoon hunting and kill a pigeon. The hot meal heals you by " + rando + " points.")
    pigeonsKilled++

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Find treasure in a crypt
if (encounterIndex == 8) {
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent += "-" + items[rando] + "\n"
    console.log("\x1b[33m%s\x1b[0m", "You find an old treasure chest in a crypt and find a " + items[rando] + ".")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Find treasure in some ruins
if (encounterIndex == 9) {
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent += "-" + items[rando] + "\n"
    console.log("\x1b[33m%s\x1b[0m", "While taking shelter in some ancient ruins, you find a " + items[rando] + " in a secret treasure room.")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}

//Win some treasure in a tavern
if (encounterIndex == 10) {
    let rando = Math.floor(Math.random() * items.length)
    inventoryContent += "-" + items[rando] + "\n"
    console.log("\x1b[33m%s\x1b[0m", "You gamble in a tavern and win a " + items[rando] + ".")

    //Prompt player to press button to continue
    console.log("Press [f] to continue")
    const continueChoice = readline.keyIn("", { hideEchoBack: true, limit: 'f' });
    if (continueChoice == "f") {
        printPlayerInfo()
    }
}
*/