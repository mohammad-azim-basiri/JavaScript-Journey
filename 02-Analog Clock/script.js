let $ = document;
let clock = $.querySelector(".clock");
for (let i = 1; i < 13 ; i++) {
    clock.insertAdjacentHTML('beforeend',`<label style="--i: ${i}"><span>${i}</span></label> `)
};
clock.insertAdjacentHTML('beforeend',`<div class="indicator">
        <span class="hand hour"></span>
        <span class="hand minute"></span>
        <span class="hand second"></span>
    </div>`);

let body = $.querySelector("body");
let hourHand = $.querySelector(".hour");
let minuteHand = $.querySelector(".minute");
let secondHand = $.querySelector(".second");
let modeSwitch = $.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

const updateTime = () =>{
   let date = new Date()
   let secToDeg = (date.getSeconds() / 60) * 360;
   let minToDeg = (date.getMinutes() / 60) * 360;
   let hurToDeg = (date.getHours() / 12) * 360;

   secondHand.style.transform = `rotate(${secToDeg}deg)`;
   minuteHand.style.transform = `rotate(${minToDeg}deg)`;
   hourHand.style.transform = `rotate(${hurToDeg}deg)` ; 
}
modeSwitch.addEventListener("click", ()=>{
    body.classList.toggle("dark");
    let isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});









setInterval(updateTime, 1000);
updateTime();
