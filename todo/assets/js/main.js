const todoForm = document.getElementById('todoForm');
let todoList = document.getElementById('todoList')


todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let todoInput = document.getElementById('todoInput').value;
    let todoSelect = document.getElementById('todoSelect').value;

    if (todoInput == '' || todoSelect == '') {
        alert('All Fields Are Required');
    } else {
 
        let li = document.createElement('li');
        li.className = 'list-group-item d-flex align-items-center justify-content-between';
        li.innerHTML = todoInput;
        todoInput = ' ';
        todoList.appendChild(li)

        let closeBtn = document.createElement('button');
        closeBtn.className = ('close')
        closeBtn.innerHTML = '&times;'
        li.appendChild(closeBtn)

        let importance = document.createElement('p')

        li.appendChild(importance)
        importance.innerHTML = todoSelect;
        li.insertBefore(importance, closeBtn)
 
        closeBtn.addEventListener('click', () => {

            li.remove()

        })
    }


})


// const todoForm = document.getElementById('todoForm');
// const todoList = document.getElementById('todoList');
// const addTodo = document.getElementById('addTodo');

// let todoListData = []
// let closebtn;

// addTodo.addEventListener('click', (e) => {
//     e.preventDefault()
//     let todoInput = document.getElementById('todoInput');
//     let todoSelect = document.getElementById('todoSelect');

//     todoListData.push(todoInput.value);


//     todoList.innerHTML = ''

//     todoListData.map((data) => {

//         todoList.innerHTML += `<li class="list-group-item d-flex align-items-center justify-content-between">${data} <button class="close" id="close">&times;</button></li>`

//     })



// })




// const element = document.querySelectorAll('.list-group-item > .close');


// element.addEventListener('click', () => {
//     console.log('sdfsdfgsgs')
// })