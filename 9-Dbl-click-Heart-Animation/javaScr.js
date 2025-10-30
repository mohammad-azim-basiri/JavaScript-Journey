let $ = document

let image = $.querySelector('.container')
let heart = $.querySelector('.heart')


image.addEventListener('dblclick',(event)=>{
    
    heart.style.left = (event.clientX - event.target.offsetLeft) + "px"
    heart.style.top = (event.clientY - event.target.offsetTop) + "px"
    
    heart.classList.add('active');
    setTimeout(()=>{
        heart.classList.remove('active');
    },1000)
});


