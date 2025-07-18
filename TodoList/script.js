const todoList = document.getElementById('todo-list');
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-todo');


let tasks = JSON.parse(localStorage.getItem('tasks')) || []; 

//onload page

window.onload = function(){
    renderTasks();
}

// Add Tasks
addButton.addEventListener('click',() =>{

    console.log('Add button clicked');
    let todoText = todoInput.value.trim();
    if(todoText === '') {
        alert('Please enter a task');
    }

    else{
        let task = {
            text: todoText,
            completed: false
        }

        tasks.push(task);
        console.log(tasks)
        updateLocalStorage();
        renderTasks();
        todoInput.value = ''; // Clear input field
    }
});

// Render Tasks

function renderTasks(){
    todoList.textContent = '';
    if(todoList.children.length === 0){
        todoList.classList.remove('no-items');
    }
    else{
        todoList.classList.add('no-items');
    }
    tasks.forEach((task, index) => {
        console.log(task, index);
        let li = document.createElement('li');
        li.classList.add('list');
        li.innerHTML = `
                        <div class="tasks-container">
                            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
                            <div class="btn-Container">
                                <button class='Icon' onclick= "onClickDelete(${index})">🗑️</button>
                                <input class='Icon' type=checkbox onclick= "onClickcheck(${index})" ${task.completed ? 'checked' : ''} />
                                <button class='Icon' onclick= "onClickEdit(${index})">✏️</button>
                            </div>
                        </div>
        `;
        todoList.appendChild(li);
        
    });
}


// Update Local Storage
function updateLocalStorage() {
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

// delete Tasks

function onClickDelete(index){
    tasks.splice(index, 1);
    updateLocalStorage();
    renderTasks();
}

//edit tasks

function onClickEdit(index){
    let newTask = prompt("Edit your task", tasks[index].text)
    if(newTask){
        tasks[index].text = newTask.trim();
        updateLocalStorage();
        renderTasks();
    }
}



//toggle tasks

function onClickcheck(index){
    tasks[index].completed = !tasks[index].completed
    renderTasks();
    updateLocalStorage();
}
