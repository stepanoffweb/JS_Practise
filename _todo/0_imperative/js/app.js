const main = (document => {

    function createElement (tag, props, ...children) {
        const element = document.createElement(tag);

        // for (let prop in props) {
            // необходима проверка на неунаследованность свойства!
            // element[prop] = props[prop];
        // }
        Object.keys(props).forEach(key => element[key] = props[key]); //только ключи самого объекта!
        if(children.length > 0) {
            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);// !!!!!
                }
                element.appendChild(child);
            });
        }

        return element;
    }

    function createTodoItem(title) {
        const checkbox = createElement('input', { type: 'checkbox', className: 'checkbox' });
        const label =  createElement('label', { className: 'title' }, title);
        const editInput = createElement('input', { type: 'text', className: 'textfield' });
        const editButton = createElement('button', { className: 'edit' }, 'Изменить');
        const deleteButton =  createElement('button', { className: 'delete' }, 'Удалить');
        const listItem = createElement('li', { className: 'todo-item' }, checkbox, label, editInput, editButton, deleteButton);

        // listItem.appendChild(checkbox);
        // listItem.appendChild(label);
        // listItem.appendChild(editInput);
        // listItem.appendChild(editButton);
        // listItem.appendChild(deleteButton);
        bindEvents(listItem);
        return listItem;

    }
    function  bindEvents (todoItem) {
        const checkbox = todoItem.querySelector('.checkbox');
        const editButton = todoItem.querySelector('button.edit');
        const deleteButton = todoItem.querySelector('button.delete');

        checkbox.addEventListener('change', toggleTodoItem);
        editButton.addEventListener('click', editTodoItem);
        deleteButton.addEventListener('click', deleteTodoitem);
    }
    function toggleTodoItem () { // this == {target}
        const listItem = this.parentNode;
        listItem.classList.toggle('completed');
    }

    function editTodoItem () {
        const listItem = this.parentNode;
        const title = listItem.querySelector('.title');
        const editInput = listItem.querySelector('.textfield');
        const isEditing = listItem.classList.contains('editing');

        if(isEditing) {
            title.innerText = editInput.value;
            this.innerText = 'Изменить';
        } else {
            editInput.value = title.innerText;
            this.innerText = 'Сохранить';
        }
        listItem.classList.toggle('editing');
    }
    function deleteTodoitem (args) {
        const listItem = this.parentNode;
        todoList.removeChild(listItem);
    }
// чтобы load() | save() применить, нужно переписать всё! - недостаток императивного стиля, напрямую задающего каждое действие
    function load () {
        const data = JSON.parse(localStorage.getItem('todos'));
        return data;
    }

    function save (data) {
        const string = JSON.stringify(data);
        localStorage.setItem('todos', string);
    }

    function addTodoItem(event) {
        event.preventDefault();
        if(addInput.value == '') return alert ('Необходимо ввести название задачи!');
        const todoItem =  createTodoItem(addInput.value);
        todoList.appendChild(todoItem);
        addInput.value = '';
    }

    const todoForm = document.getElementById('todo-form'),
        todoList = document.getElementById('todo-list'),
        addInput = document.getElementById('add-input'),
        todoItems = document.querySelectorAll('.todo-item');

    function main () {
        todoForm.addEventListener('submit', addTodoItem);
        todoItems.forEach(item => bindEvents(item));
    }

    return main;

})(document);

main();
