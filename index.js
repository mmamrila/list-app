const button = document.getElementById('addTask');
const container = document.getElementById('container');
const priority = document.getElementById('priority');
const priorityButton = document.getElementById('priorityButton');

button.addEventListener('click', function () {
  const newElement = document.createElement('div');
  newElement.className = 'task-container';
  newElement.innerHTML = '<button type="button" class="complete">Complete</button><input class="input"></input><button type="button" class="priorityButton" id="priorityId">Priority</button><button type="button" class="delete">Delete</button>';
  container.append(newElement);
});

let priorityId = function () {
  let s4 = function () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
  }
  return s4() + s4();
}

console.log(priorityId());
priorityButton.addEventListener('click', function () {
  priority.appendChild(container);
  console.log('clicked');
});