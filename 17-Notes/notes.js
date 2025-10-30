let $ = document

const notesContainer = $.querySelector(".notes-container")
const btn = $.querySelector(".btn")
let notes = $.querySelectorAll(".input-box")

window.addEventListener('load', () =>{
    let getLocalStorageData = localStorage.getItem('notes')
    if(getLocalStorageData){
        notesContainer.insertAdjacentHTML("beforeend",getLocalStorageData)
    }
     
})
btn.addEventListener("click", () =>{
    createNoteCard()
})
function createNoteCard(){
    notesContainer.insertAdjacentHTML("beforeend",`<p contenteditable="true" class="input-box" onkeyUp= 'keyUpNote(event)'>
        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/60/filled-trash.png" alt="filled-trash" onclick= 'deleteNote(event)' />
    </p>`)
}
function keyUpNote(){
    updateLocalStorage()
}
function updateLocalStorage(){
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function deleteNote(event) {
    event.target.parentElement.remove();
    updateLocalStorage()
}
$.addEventListener("keydown",event =>{
    if(event.keyCode == 13){
        $.execCommand("insertLineBreak");
    }
    
})

