const tally = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0
}

for (let i = 1; i < 101; i++) {
    let answer = ""
    if (i % 15 == 0) {
        answer = "fizzbuzz"
        tally.fizzbuzz++
    }
    else if (i % 3 == 0) {
        answer = "fizz"
        tally.fizz++
    }
    else if (i % 5 == 0) {
        answer = "buzz"
        tally.buzz++
    }
    if (answer == "") {
        answer = i
    }

    console.log(answer)
}

console.log(tally)
//