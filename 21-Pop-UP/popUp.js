let $ = document
let btn = $.querySelector(".btn")
let popup = $.querySelector(".popup")
let closePopUpBtn = $.querySelector("#closePopUp")

btn.addEventListener("click",() =>{
    popup.classList.add("open-popup")
})
closePopUpBtn.addEventListener("click",() =>{
    popup.classList.remove("open-popup")
})

