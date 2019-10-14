$(document).ready(() => {
  $.getJSON('/api/todos')
    .then(addTodos)
    .catch(errHandle)
  
  $('#todoInput').keypress(function (event) {
    if (event.which == 13) {
      createTodo()
    }
  })

  $('.list').on('click', 'li', function () {
    updateTodo($(this))
  })

  $('.list').on('click', 'span', function (e) {
    e.stopPropagation();
    removeTodo($(this).parent())
  })
})

//============
// FUNCTIONS
//============
function addTodos(todos) {
  todos.forEach((todo) => {
    addTodo(todo)
  })
}

function createTodo() {
  let usrInput = $('#todoInput').val();
  $.post('/api/todos', { name: usrInput })
    .then((newTodo) => {
      addTodo(newTodo)
      $('#todoInput').val('')
    })
    .catch(errHandle)
}

function addTodo(todo) {
  let newTodo = $('<li class="task">' + todo.name + '<span>X</span></li>');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass('done')
  }
  $('.list').append(newTodo)
}

function removeTodo(todo) {
  let deleteUrl = '/api/todos/' + todo.data('id');
  $.ajax({
      method: 'DELETE',
      url: deleteUrl
    })
    .then(() => todo.remove())
    .catch(errHandle)
}

function updateTodo(todo) {
  let updateUrl = '/api/todos/' + todo.data('id');
  let isDone = !todo.data('completed');
  let updateData = { completed: isDone };
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
    .then((updatedData) => {
      todo.toggleClass('done');
      todo.data('completed', isDone)
    })
    .catch(errHandle)
}

function errHandle(err = 'something went wrong') {
  console.log('Error: ' + err);
}