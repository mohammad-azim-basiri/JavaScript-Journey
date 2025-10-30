let $ = document

let hourSpan = $.querySelector("#hour")
let minSpan = $.querySelector("#min")
let secSpan = $.querySelector("#sec")

let clock = $.querySelector(".clock")

setInterval(() => {
    hourSpan.innerHTML = (new Date().getHours() < 10 ? "0": "") + new Date().getHours()
    minSpan.innerHTML = (new Date().getMinutes() < 10 ? "0": "") + new Date().getMinutes()
    secSpan.innerHTML = (new Date().getSeconds() < 10 ? "0": "") + new Date().getSeconds()
},1000)
