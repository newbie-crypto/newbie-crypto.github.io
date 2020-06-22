//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', todoBtn);

//Functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //create div tag and class
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-div');
    //nest todoDiv in todoList
    todoList.appendChild(todoDiv);
    //create li tag and class
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-li');
    //declare value and clear after output
    todoLi.innerText = todoInput.value;
    todoInput.value = '';
    //nest todoLi in todoDiv
    todoDiv.appendChild(todoLi);
    //create check button tag and class
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('check-btn');
    //nest checkButton in todoDiv
    todoDiv.appendChild(checkButton);
    //create trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    //nest trashButton in todoDiv
    todoDiv.appendChild(trashButton);
}

function todoBtn(event) {
    //declare event.target
    const item = event.target;
    //delete function
    if(item.classList[0] === 'trash-btn') {
        const toDelete = item.parentElement;
        toDelete.classList.add('fall');
        //animate first, then delete
        toDelete.addEventListener('transitionend', function(){toDelete.remove()});
    }
    //check function
    if (item.classList[0] === 'check-btn') {
        const toCheck = item.parentElement;
        toCheck.classList.toggle('completed');
    }
}

//END OF CODE