
let btnAdd = document.getElementById ('add');
let btnDecide = document.getElementById ('decide');
let result;
document.querySelector('form').addEventListener('submit', handleSubmitForm)

let activity = ['Swimming', 'Watch Movie', 'Wash car', 'Work!'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnDecide.addEventListener('click', () => {
    let index = getRandomNumber(0, activity.length-1);
    alert(activity[index])
});

//btnAdd.addEventListener('click', addItem());

function addItem() {
    var ul = document.getElementById("todolist");
    var candidate = document.getElementById("addActivity");
    var li = document.createElement("li");
    li.setAttribute('id', candidate.value);
    li.appendChild(document.createTextNode(candidate.value));
    ul.appendChild(li);
    //ul.innerHTML = '<li><input><button>Add Option</button></li>';
}

function handleSubmitForm(e){
    e.preventDefulat();
    let input = document.querySelector('input');
    if(input.value != '')
        addTodo(inout.value);
    input.value = ';'
}

function addtodo(){
    let ul = document.querySelector('ul');
    let li = document.querySelector('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button class="deleteButton"><i class="fas fa-trash"></i></button>
    `

    li.classList.add('todo-list-item');
    ul.appendChild(li);
}