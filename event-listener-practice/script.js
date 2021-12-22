const square = document.getElementById("square")

square.addEventListener("mouseenter", toBlue)
square.addEventListener("mousedown", toRed)
square.addEventListener("mouseup", toYellow)
square.addEventListener("dblclick", toGreen)
document.addEventListener("wheel", toOrange)

document.addEventListener("keydown", e=>{
    if(e.key == "b"){
        toBlue()
    }else if(e.key == "r"){
        toRed()
    }else if(e.key == "y"){
        toYellow()
    }else if(e.key == "g"){
        toGreen()
    }else if(e.key == "o"){
        toOrange()
    }
})

//Hover [x]
function toBlue(){
    square.style.backgroundColor = "blue"
}

//Hold Down [x]
function toRed(){
    square.style.backgroundColor = "red"
}

//Mouse Up [x]
function toYellow(){
    square.style.backgroundColor = "yellow"
}

//Double Click [x]
function toGreen(){
    square.style.backgroundColor = "green"
}

//Scroll [x]
function toOrange(){
    square.style.backgroundColor = "orange"
}


