let $ = document

let date = new Date("Nov 04,2024 00:00:00").getTime();

let day =$.querySelector("#days")
let hour =$.querySelector("#hours")
let minute =$.querySelector("#minutes")
let second =$.querySelector("#seconds")


let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = date - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    day.innerHTML = days <10 ? "0" + days: days;
    hour.innerHTML = hours <10 ? "0" + hours: hours;
    minute.innerHTML = minutes <10 ? "0" + minutes: minutes;
    second.innerHTML = seconds <10 ? "0" + seconds: seconds;    

    if (distance < 0){
        clearInterval(x)
        day.innerHTML = "00";
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "00";
    }
}, 1000);