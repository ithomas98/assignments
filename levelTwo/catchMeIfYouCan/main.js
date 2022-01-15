function sum(x, y) {
    if (typeof x != "number" || typeof y != "number") {
        throw "Check data types"
    } else {
        return x + y;
    }
}

try {
    console.log(sum(1, 2))
    console.log(sum(1, "A"))
} catch (err) {
    console.log(err)
}



var user = { username: "sam", password: "123abc" };
function login(username, password) {
    if (username != user.username || password != user.password) {
        throw "Wrong credentials"
    } else {
        console.log("Login successful")
    }
}

try {
    login("sam", "123abc")
}
catch (err) {
    console.log(err)
}

try {
    login("am", "12abc")
}
catch (err) {
    console.log(err)
}