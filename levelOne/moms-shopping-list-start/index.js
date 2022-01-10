const form = document.addItem;
const list = document.getElementById("list")

form.addEventListener("submit", newItem)

function newItem(e) {
    e.preventDefault()

    const item = document.createElement("li")
    const name = document.createElement("div")
    const editBtn = document.createElement("button")
    const deleteBtn = document.createElement("button")

    name.textContent = form.title.value
    editBtn.textContent = "edit"
    deleteBtn.textContent = "X"

    item.appendChild(name)
    item.appendChild(editBtn)
    item.appendChild(deleteBtn)
    list.appendChild(item)

    deleteBtn.addEventListener("click", e => item.remove())
    editBtn.addEventListener("click", function(e){
        editBtn.remove()
        deleteBtn.remove()

        const editInput = document.createElement("input")
        const editSubmit = document.createElement("button")

        editSubmit.textContent = "submit"
        item.appendChild(editInput)
        item.appendChild(editSubmit)

        editSubmit.addEventListener("click", function(){
            name.textContent = editInput.value
            editInput.remove()
            editSubmit.remove()
            item.appendChild(editBtn)
            item.appendChild(deleteBtn)
        })
    })
}