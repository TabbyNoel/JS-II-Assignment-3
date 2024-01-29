script.js
document.getElementById('add-todo').addEventListener('click', function() {
    var input = document.getElementById('todo-input');
    var text = input.value.trim();

    if (text !== '') {
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                document.getElementById('completed-todos').appendChild(this.parentElement);
            } else {
                document.getElementById('pending-todos').appendChild(this.parentElement);
            }
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(text));
        document.getElementById('pending-todos').appendChild(li);
        input.value = '';
    }
});

document.getElementById('clear-completed').addEventListener('click', function() {
    var completedTodos = document.getElementById('completed-todos');
    while (completedTodos.firstChild) {
        completedTodos.removeChild(completedTodos.firstChild);
    }
});
