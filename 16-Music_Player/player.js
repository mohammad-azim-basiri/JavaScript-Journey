let $ = document
let progress = $.getElementById('progress')
let song = $.getElementById('song')
let ctrlIcon = $.getElementById('ctrlIcon')
let h1 = $.querySelector('h1')
let p = $.querySelector('p')

// let songs = [
//     {id:1,name:"RIHANNA", artist:"SINGER",srcimg:"image.jpg",srcsong:"Rihanna - Where Have You Been.mp3"},
//     {id:2,name:"HAYEDEH", artist:"SINGER",srcimg:"image.jpg",srcsong:"Hayedeh--20Yarab.mp3"},
//     {id:3,name:"HAYEDEH", artist:"SINGER",srcimg:"image.jpg",srcsong:"Hayedeh_-_Sang_Farsh_(128).mp3"},
//     {id:4,name:"QOMEISHI", artist:"SINGER",srcimg:"image.jpg",srcsong:"05_Ageh_To_Beri.mp3"}
// ]


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime ;
}
function playPause(){
    if(song.paused){
        song.play()
        ctrlIcon.className ="fa-solid fa-pause"
    }else{
        song.pause()
        ctrlIcon.className = "fa-solid fa-play"
    }
}
if(song.played){
    setInterval(() => {
        progress.value = song.currentTime ;
    },500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.className ="fa-solid fa-pause";
}

