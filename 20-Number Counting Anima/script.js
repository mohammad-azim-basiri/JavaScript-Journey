let valueDisplays = document.querySelectorAll('.num');
let interval = 4000;

valueDisplays.forEach((valueDisplay)=>{
    let startVal = 0;
    let endVal = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endVal);
    let counter = setInterval(()=>{
        startVal++;
        valueDisplay.textContent = startVal;
        if(startVal == endVal){
            clearInterval(counter);
        }
    },duration)



})




