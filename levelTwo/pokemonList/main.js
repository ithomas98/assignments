const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
xhr.send()

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const JSONdata = xhr.responseText
        const data = JSON.parse(JSONdata)
        console.log(data)
        showData(data)
    } 
}

function showData(data){
    for(let i = 0; i < data.objects[0].pokemon.length; i++){
        const name = document.createElement("h2")
        name.textContent = data.objects[0].pokemon[i].name
        document.body.appendChild(name)
    }
}