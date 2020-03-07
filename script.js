const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let unCheckedItems = 0
let checkItems = 0
let items = 0

let done =()=>{
  if(unCheckedItems==0) return
  unCheckedItems--
  checkItems++
  itemCountSpan.innerHTML=checkItems
  uncheckedCountSpan.innerHTML=unCheckedItems
}

function newTodo() {
  let toDo = prompt('What are you going to do? :')
  
  if(toDo == null || toDo ==""){
    alert('Invalid Input')
    return
  } 
  else{
    let item = document.createElement('li')
    let box = document.createElement('input')

    box.setAttribute("type","checkbox")
    box.setAttribute("onclick", "done()")

    item.setAttribute("class","todo-text")
    item.appendChild(box)
    item.innerHTML+=toDo
    let id = "item-"+items
    item.setAttribute("id",id)
    items++

    list.appendChild(item)
    
    unCheckedItems++
    console.log(list)
  }
  uncheckedCountSpan.innerHTML=unCheckedItems
}