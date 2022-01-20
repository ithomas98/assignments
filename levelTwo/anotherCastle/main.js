class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked) {
        this.name = namePicked;
    }

    gotHit() {
        if (this.hasStar) {
            console.log("You got hit but your star protected you!\n")
            this.hasStar = false
        } else {
            if (this.status == "Powered Up") {
                this.status = "Big"
            }
            else if (this.status == "Big") {
                this.status = "Small"
            } else {
                this.status = "Dead"
            }

            console.log(`You got hit and are now ${this.status}!\n`)
        }

    }

    gotPowerUp() {
        if (this.status == "Small") {
            this.status = "Big"
            console.log(`You picked up a Mushroom and are now ${this.status}!\n`)
        }
        else if (this.status == "Big") {
            this.status = "Powered Up"
            console.log(`You picked up a Mushroom and are now ${this.status}!\n`)

        } else {
            this.hasStar = true;
            console.log(`You picked up a Star!\n`)
        }

    }

    addCoin() {
        this.totalCoins++
        console.log(`You got a coin!\n`)
    }

    print() {
        console.log(`Name: ${this.name}\nStatus: ${this.status}\nCoins: ${this.totalCoins}\n`)
    }
}

const player = new Player("", 0, "Small", false)

player.setName("Luigi")

let intervalID

function setTime() {
    intervalID = setInterval(next, 2000)
}

function next() {

    player.print()

    let rando = Math.floor(Math.random() * 3)

    if (rando == 0) {
        player.gotHit()
    } else if (rando == 1) {
        player.gotPowerUp()
    } else {
        player.addCoin()
    }


    if (player.status == "Dead") {
        clearInterval(intervalID);
    }
}

setTime()