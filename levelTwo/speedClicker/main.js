const clock = document.getElementById("clock")
const display = document.getElementById("display")
let time = 10;
let inProgress = false;

document.addEventListener("click", addClick)
document.addEventListener("click", startTimer)

var interval = setInterval(countDown, 1000)

let count = localStorage.getItem("clicks");
display.textContent = count


function addClick(){
    if(inProgress){
        count++
        display.textContent = count
    }
}

function countDown(){
    if(inProgress){
        time -= 1
        clock.textContent = time
    }
}

function startTimer(){
    if(!inProgress){
        clock.textContent = time
        setTimeout(stopTimer,  time * 1000)
    }
    inProgress = true
}

function stopTimer(){
    inProgress = false;
    clearInterval(interval)

    localStorage.setItem("clicks", count)
}