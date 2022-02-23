const button = document.getElementById('addTask');
const container = document.getElementById('container');


button.addEventListener('click', function () {
  const newElement = document.createElement('div');
  newElement.className = 'task-container';
  newElement.innerHTML = '<button type="button" class="complete">Complete</button><input class="input"></input><button type="button" class="priority-button">Priority</button><button type="button" class="delete">Delete</button>';
  container.append(newElement);
});

priority.addEventListener('click', function () {

})