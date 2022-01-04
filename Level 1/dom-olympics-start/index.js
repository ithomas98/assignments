//Qualifier
const headerSpace = document.getElementById("header");
headerSpace.className = "header"

const header = document.createElement("h1");
header.textContent = "JavaScript Made This!!"

const subHeader = document.createElement("h4");
subHeader.innerHTML = "<span class = 'name'> Isaac </span> wrote the JavaScript."

headerSpace.appendChild(header)
headerSpace.appendChild(subHeader)

//Bronze
const messages = document.getElementsByClassName("message")
messages[0].textContent = "wazzup"
messages[1].textContent = "wus good"
messages[2].textContent = "how are you"
messages[3].textContent = "great"


const clearBtn = document.getElementById("clear-button")
clearBtn.addEventListener("click", clearMessages)
const messageContainer = document.getElementsByClassName("messages")

function clearMessages() {
    messageContainer[0].innerHTML = ""
}

//Silver
const themeSelector = document.getElementById("theme-drop-down")
themeSelector.addEventListener("change", themeChange)

function themeChange() {
    const leftMessages = document.querySelectorAll(".left")
    const rightMessages = document.querySelectorAll(".right")
    if (themeSelector.value == "theme-one") {
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = "burlyWood"
            rightMessages[i].style.backgroundColor = "lightBlue"
        }
    } else if (themeSelector.value == "theme-two") {
        for (var i = 0; i < leftMessages.length; i++) {
            leftMessages[i].style.backgroundColor = "black"
            rightMessages[i].style.backgroundColor = "red"
            leftMessages[i].style.color = "white"
            rightMessages[i].style.color = "white"
        }
    }
}

//Gold
const sendBtn = document.getElementById("sendBtn")
let input = document.getElementById("input")
sendBtn.addEventListener("click", sendMessage)

function sendMessage(e) {
    e.preventDefault()
    const newMessage = document.createElement("div")
    newMessage.textContent = input.value
    newMessage.className = "message"

    if (messages.length % 2 == 0) {
        newMessage.classList.add("left")
    } else {
        newMessage.classList.add("right")
    }

    messageContainer[0].appendChild(newMessage)
}
