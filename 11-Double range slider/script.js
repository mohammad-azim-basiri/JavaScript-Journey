let sliderOne = document.getElementById('slider-1');
let sliderTwo = document.getElementById('slider-2');
let displayValOne = document.getElementById('range1');
let displayValTwo = document.getElementById('range2');
let sliderTrack = document.querySelector('.slider-track');

let SliderMaxVal = sliderOne.max;
let minGap = 2;

function sliderOneFunc(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
    fillColor();
};
function sliderTwoFunc(){
    if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.textContent = sliderTwo.value;
    fillColor();
};
function fillColor(){
    percent1 = (sliderOne.value / SliderMaxVal) * 100;
    percent2 = (sliderTwo.value / SliderMaxVal) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`
};

sliderOne.addEventListener("input",sliderOneFunc);
sliderTwo.addEventListener("input",sliderTwoFunc);
window.onload = ()=>{
    sliderOneFunc();
    sliderTwoFunc();
};