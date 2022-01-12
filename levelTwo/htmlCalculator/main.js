//Addition
const addForm = document.add;
addForm.addEventListener("submit", function(e){
    e.preventDefault()

    const answer = document.createElement("h1")
    answer.textContent = parseInt(addForm.one.value) + parseInt(addForm.two.value)
    addForm.appendChild(answer)
})
//Subtraction
const subForm = document.sub;
subForm.addEventListener("submit", function(e){
    e.preventDefault()

    const answer = document.createElement("h1")
    answer.textContent = (subForm.one.value - subForm.two.value)
    subForm.appendChild(answer)
})

//Multiplication
const multForm = document.mult;
multForm.addEventListener("submit", function(e){
    e.preventDefault()

    const answer = document.createElement("h1")
    answer.textContent = (multForm.one.value * multForm.two.value)
    multForm.appendChild(answer)
})