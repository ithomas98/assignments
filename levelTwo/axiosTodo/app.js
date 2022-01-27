const form = document.newItem
form.addEventListener("submit", function (e) {
    e.preventDefault()
    addItem()

})

getData()

function getData() {
    axios.get("https://api.vschool.io/isaacthomas/todo")
        .then(res => showData(res.data))
        .catch(err => console.log(err))
}

function showData(data) {
    clearItems()

    for (let i = 0; i < data.length; i++) {
        createItem(data[i])
    }
}

function clearItems() {
    const list = document.getElementById("todoList")
    while (list.firstChild) {
        list.removeChild(list.firstChild)
    }
}

function createItem(item) {
    //Make div
    const newItem = document.createElement("div")
    newItem.classList.add("item")
    document.getElementById("todoList").appendChild(newItem)

    //Add Checkbox
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type", "checkbox")
    checkbox.addEventListener("change", function () {
        completeItem(item)
        title.setAttribute("class", "completed")
    })
    newItem.appendChild(checkbox);

    //Add Title
    const title = document.createElement("span")
    title.classList.add("title")
    title.textContent = item.title
    newItem.appendChild(title)

    //Add Clear button
    const clearBtn = document.createElement("button")
    clearBtn.innerText = "Delete"
    clearBtn.addEventListener("click", function () {
        removeItem(item)
    })
    newItem.appendChild(clearBtn);

    //If the item is completed, display with a strikethrough and checked box
    if (item.completed) {
        title.setAttribute("class", "completed")
        checkbox.checked = true;
    }
}

function addItem() {
    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }

    axios.post("https://api.vschool.io/isaacthomas/todo", newItem)
        .then(res => getData())
        .catch(err => console.log(err))
}

function removeItem(item) {
    axios.delete(`https://api.vschool.io/isaacthomas/todo/${item._id}`)
        .then(res => getData())
        .catch(err => console.log(err))
}

function completeItem(item) {
    const completedItem = {
        completed: true
    }

    axios.put(`https://api.vschool.io/isaacthomas/todo/${item._id}`, completedItem)
        .then(res => getData())
        .catch(err => console.log(err))
}