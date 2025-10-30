let $ = document
let password = $.querySelector('#password')
let passIcon = $.querySelector('#passIcon')


passIcon.addEventListener('click',()=>{
    if(password.type === 'password'){
        password.type = 'text';
        passIcon.firstChild.src = "lock_open.png";
    }else{
        password.type = 'password';
        passIcon.firstChild.src = "lock.png";
    }
})

