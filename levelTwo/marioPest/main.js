const goombaNum = document.getElementById("gNum");
const bombNum = document.getElementById("bNum");
const cheepNum = document.getElementById("cNum");
const price = document.getElementById("total");
let total = 0;

goombaNum.addEventListener("input", function(){
    total += goombaNum.value * 5
    price.textContent = `Total Price: ${total} coins`
})
bombNum.addEventListener("input", function(){
    total += bombNum.value * 7
    price.textContent = `Total Price: ${total} coins`
})
cheepNum.addEventListener("input", function(){
    total += cheepNum.value * 11
    price.textContent = `Total Price: ${total} coins`
})

