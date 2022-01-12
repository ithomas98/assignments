const form = document.travel;



form.addEventListener("submit", function(e){
    e.preventDefault()

    const firstName = travel.firstName.value
    const lastName = travel.lastName.value
    const age = travel.age.value
    const gender = travel.gender.value
    const dest = travel.destination.value
    const diet = []
    for(let i = 0; i < form.diet.length; i++){
        if(form.diet[i].checked){
            diet.push(" " + form.diet[i].value)
        }
    }

    const info = [`First Name: ${firstName}\n Last Name: ${lastName}\n Age: ${age}\n Gender: ${gender}\n Destination: ${dest}\n Dietary Restrictions:  ${diet}`]
    
    alert(info)
})