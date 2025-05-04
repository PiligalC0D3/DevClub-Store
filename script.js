const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
const items = document.querySelectorAll(".item")
const dots = document.querySelectorAll(".dot")
const list = document.querySelector(".list")
const numberIndicator = document.querySelector(".numbers")

let active = 0;
const total = items.length
let timer;




function update (direction) {
    
    document.querySelector(".item.active").classList.remove("active")
    document.querySelector(".dot.active").classList.remove("active")

    if (direction > 0) {
        active = active + 1 

    
    if (active === total) {
        active = 0

    }
}

    else if (direction < 0) {
        active = active - 1

         
    if (active < 0) {
        active = total - 1
        
    }   

} 

    items[active].classList.add("active")
    dots[active].classList.add("active")
    numberIndicator.innerHTML = `${active + 1} / ${total}`
    list.scrollTo({
        left: items[active].offsetLeft - 100,
        behavior: "smooth"
    })
   
    
}



prevButton.addEventListener("click",  () =>{
    update(-1)
})

nextButton.addEventListener("click",  () =>{
    update(1)
})


