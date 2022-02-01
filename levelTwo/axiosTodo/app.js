const newBtn = document.getElementById("newBtn")
newBtn.addEventListener("click", openNewItemMenu)

const form = document.newItem
form.addEventListener("submit", function (e) {
    e.preventDefault()
    addItem()
    resetForm()
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
    checkbox.addEventListener("input", function () {
        if (item.completed == false) {
            title.setAttribute("class", "completed")
        } else {
            title.setAttribute("class", "title")
        }
        updateItem(item)
    })
    newItem.appendChild(checkbox);

    //Add Title
    const title = document.createElement("span")
    title.classList.add("title")
    title.textContent = item.title
    newItem.appendChild(title)

    //Add Price
    if(item.price != null){
        const price = document.createElement("p")
        price.classList.add("price")
        price.textContent = `$${item.price}`
        newItem.appendChild(price)
    }

    //Add Description
    if(item.description != null){
        const description = document.createElement("p")
        description.classList.add("description")
        description.textContent = item.description
        newItem.appendChild(description)
    }

    //Add Image
    if(item.imgUrl != ""){
        const img = document.createElement("img")
        img.classList.add("img")
        img.src = item.imgUrl
        newItem.appendChild(img)
    }

    //Add Clear button
    const clearBtn = document.createElement("p")
    clearBtn.innerHTML = "<span class='material-icons btn'>clear</span>"
    clearBtn.addEventListener("click", function () {
        removeItem(item)
    })
    newItem.appendChild(clearBtn);

    //If the item is completed, strikethrough and check the box
    if (item.completed) {
        title.setAttribute("class", "completed")
        checkbox.checked = true;
    }
}

function addItem() {
    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.imgUrl.value
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

function updateItem(item) {
    const completedItem = { completed: true }
    const unfinishedItem = { completed: false }

    if (item.completed) {
        axios.put(`https://api.vschool.io/isaacthomas/todo/${item._id}`, unfinishedItem)
            .then(res => getData())
            .catch(err => console.log(err))
    } else {
        axios.put(`https://api.vschool.io/isaacthomas/todo/${item._id}`, completedItem)
            .then(res => getData())
            .catch(err => console.log(err))
    }
}

function openNewItemMenu() {
    form.style.display = "block"
    newBtn.style.display = "none"
}

function resetForm(){
    newBtn.style.display = "block"
    form.style.display = "none"
    form.title.value = ""
    form.price.value = ""
    form.description.value = ""
    form.imgUrl.value = ""
}