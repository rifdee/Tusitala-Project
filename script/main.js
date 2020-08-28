document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
document.querySelector('ul').addEventListener('click', handleDelete);
document.getElementById('decide').addEventListener('click', decideTodo);


let activity = [];

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    activity.push(input.value);
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function decideTodo(){
    let index = getRandomNumber(0, activity.length-1);
    alert(activity[index])
}

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}


function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `
        <span class="todo-item" >${todo}</span>
        <button name="deleteButton" class="deleteBtn" ><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('todo-list-item');
    ul.appendChild(li);
}

function handleClearAll(e) {
    activity.splice(0, activity.length);
    document.querySelector('ul').innerHTML = '';
}

function handleDelete(e) {
    
   
    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function deleteTodo(e) {
    let item = e.target.parentNode;

    let input = document.querySelector('li').innerHTML;
    let i = activity.indexOf(input.value);
    
    activity.splice(i, 1);
    
    item.addEventListener('transitionend', function () {
        item.remove(); 
    });

    item.classList.add('todo-list-item-fall');
}