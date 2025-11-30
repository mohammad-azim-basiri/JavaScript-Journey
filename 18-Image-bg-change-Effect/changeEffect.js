let imgBox = document.querySelector(".img-Box");
let imgWrap = document.querySelector(".img-wrap");
let originalImg = document.querySelector("#original-img");
let line = document.querySelector("#line");

let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px";






imgBox.addEventListener("mousemove",(evt) => {
    let boxWidth = (evt.pageX - leftSpace) + "px";
    imgWrap.style.width = boxWidth;
    line.style.left = boxWidth;
});
