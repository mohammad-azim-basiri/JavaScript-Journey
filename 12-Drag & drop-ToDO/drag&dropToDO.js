// let $ = document

// let rightBox = $.querySelector('#right')
// let leftBox = $.querySelector('#left')
// let addIcon = $.querySelector('.wrapperImg_1')
// let deleteIcon = $.querySelector('.wrapperImg_2')
// let input = $.querySelector('.wrapper Input')
// let todosArray = [];
// let temp
// function addNewTodo(value,bool){
//     if(bool){
//         temp = rightBox
//     }else {
//         temp = leftBox
//     }
//     temp.insertAdjacentHTML('beforeend',`<div class="list" draggable="true" ondragstart="dragstart(event)">${value}</div>`)
//     saveInStorage(value)
//     input.value = ""
// }
// function saveInStorage(value){
//     let newToDO = {
//         id:todosArray.length + 1,
//         title :value,
//         complete:false
//     }
//     todosArray.push(newToDO);
//     setLocalStorage(todosArray)

// }
// function setLocalStorage(toDosList){
//     localStorage.setItem('todos',JSON.stringify(toDosList))
// }



// function dragstart(event) {
//     let selected = event.target;
//     console.log(event.target);
    
//     rightBox.addEventListener('dragover',(event)=>{
//         event.preventDefault();
//     });
//     rightBox.addEventListener('drop',(event)=>{
//         rightBox.appendChild(selected);
//         selected.classList.add("listInRight")
//         updateLocalStorage(selected)

//         selected = null;
        
//     });
    
//     leftBox.addEventListener('dragover',(event)=>{
//         event.preventDefault();
//     });
//     leftBox.addEventListener('drop',(event)=>{
//         leftBox.appendChild(selected);
//         selected.classList.remove("listInRight")
//         updateLocalStorage(selected)

//         selected = null;
//     });
    
//     deleteIcon.addEventListener('dragover', (event) => {
//         event.preventDefault();
//     })
//     deleteIcon.addEventListener('drop', () => {
//         selected.remove();
//         updateLocalStorage(selected)        
//         selected = null;
//     })
// }
// function updateLocalStorage(selected){
//     selected.complete = !selected.complete
// }

// window.addEventListener('load',() =>{
//     input.focus();
    
//     if(localStorage.getItem("todos")){
//         JSON.parse(localStorage.getItem("todos")).forEach((todo)=> {
//             console.log(todo.title)
//             addNewTodo(todo.title,todo.complete);
                
//         });
//     }
// })
// input.addEventListener("keydown",(event) =>{
//     if(event.key === "Enter" && input.value){
//         addNewTodo(input.value,false)
//     }
// })
// addIcon.addEventListener('click', () => {
//     addNewTodo(input.value,false)
// })



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let $ = document

let rightBox = $.querySelector('#right');
let leftBox = $.querySelector('#left');
let addIcon = $.querySelector('.wrapperImg_1');
let deleteIcon = $.querySelector('.wrapperImg_2');
let input = $.querySelector('.wrapper Input');
let todosArray = [];


function addNewTodo(value){
        leftBox.insertAdjacentHTML('beforeend',`<div class="list" draggable="true" ondragstart="dragstart(event)">${value}</div>`)
        input.value = ""
}

function dragstart(event) {
        let selected = event.target;
        
        rightBox.addEventListener('dragover',(event)=>{
            event.preventDefault();
        });
        rightBox.addEventListener('drop',()=>{
            rightBox.appendChild(selected);
            selected.classList.add("listInRight")
            selected = null;
            
        });
        
        leftBox.addEventListener('dragover',(event)=>{
            event.preventDefault();
        });
        leftBox.addEventListener('drop',()=>{
            leftBox.append(selected);
            selected.classList.remove("listInRight")
            selected = null;
        });
        
        deleteIcon.addEventListener('dragover', (event) => {
            event.preventDefault();
        })
        deleteIcon.addEventListener('drop', () => {
            selected.remove();
            selected = null;
        })
    }
window.addEventListener('load',() =>{
    input.focus();
})
input.addEventListener("keydown",(event) =>{
    if(event.key === "Enter" && input.value){
        addNewTodo(input.value)
    }
})
addIcon.addEventListener('click', () => {
    addNewTodo(input.value)
})