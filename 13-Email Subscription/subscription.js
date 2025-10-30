let $ = document
let msg = $.querySelector("#msg")
let input = $.querySelector("input")

const scriptURL = 'https://script.google.com/macros/s/AKfycbzLZAadW9YAPT7vZNKxvvWka4FHF1ckpAdCaPITJSPpjCufi6yLxYDLZoQ_821xq1mHxw/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "اطلاعات بیشتر برات ایمیل میشه."
        setTimeout(() => {
            msg.innerHTML = "";
            input.value = "";
        }, 2000);
        form.reset();
        
    })
      .catch(error => console.error('Error!', error.message))
  })
