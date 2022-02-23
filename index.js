const button = document.getElementById('addTask');
let container = document.getElementById('container');

button.addEventListener('click', function () {
  const newElement = document.createElement('div');
  newElement.className = 'task-container';
  newElement.innerHTML = '<input class="input"></input><button type="button" class="priority">Priority</button><button type="button" class="delete">Complete</button>';
  container.append(newElement);
});