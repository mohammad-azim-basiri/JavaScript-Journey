let $ = document
let captchaTextBox = $.querySelector(".captcha_box input")
let captchaInputBox = $.querySelector(".captcha_input input")
let refreshBtn = $.querySelector(".refresh_button")
let message = $.querySelector(".message")
let submit = $.querySelector(".button")
let captchaText = null


const generateCaptcha = () => {
    const randomCaptcha = Math.random().toString(36).substring(2,7)
    const randomCaptchaArray = randomCaptcha.split("");
    const changedCaptcha = randomCaptchaArray.map(char =>(Math.random() > 0.5 ? char.toUpperCase() : char))
    captchaText = changedCaptcha.join(" ");
    captchaTextBox.value = captchaText;
}
const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
    message.style.display = "none";
    captchaInputBox.focus();
}
const captchaKeyUpValidate = () => {
    submit.classList.toggle("disabled",!captchaInputBox.value)
}
const submitBtnClick = () => {
    captchaText = captchaText.split("").filter((char) =>char !== " ").join("");
    if(captchaInputBox.value === captchaText){
        message.style.display = "block";
        message.innerText = "Entered Captcha is Correct!";
        message.style.color = "#826afb";
    }
    if(captchaInputBox.value !== captchaText || !captchaInputBox.value){
            message.style.display = "block";
            message.style.color = "red";
            message.innerText = "Entered Captcha is not Correct  !!!";
        setTimeout(() => {
            message.style.display = "none";
            captchaInputBox.value = ""
        }, 1500);
    }
    
}



refreshBtn.addEventListener("click",refreshBtnClick);
captchaInputBox.addEventListener("keyup",captchaKeyUpValidate);
submit.addEventListener("click",submitBtnClick);
generateCaptcha();
window.addEventListener("load",()=>{
    captchaInputBox.focus();
});