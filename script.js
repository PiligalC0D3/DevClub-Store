const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const list = document.querySelector(".list")
const numberIndicator = document.querySelector(".numbers")

let active = 0;
const total = items.length
let timer;


prevButton.addEventListener("click",  () =>{
    alert("Prev")
})

nextButton.addEventListener("click",  () =>{
    alert("next")
})