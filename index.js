const button = document.getElementById('addTask');
const container = document.getElementById('container');
const priority = document.getElementById('priority');
const priorityButton = document.getElementById('priorityId');



button.addEventListener('click', function () {
  const newElement = document.createElement('div');
  newElement.className = 'task-container';
  newElement.innerHTML = '<button type="button" class="complete">Complete</button><input class="input"></input><button type="button" class="priorityButton" id="priorityId">Priority</button><button type="button" class="delete">Delete</button>';
  container.append(newElement);
});

// Creates randomized 8 place hexidecimal ID for each task element created
let priorityId = function () {
  let s8 = function () {
    return Math.floor((Math.random()) * 0x100000000)
      .toString(16)
  }
  return s8();
}

console.log(priorityId());

// Move task element to priority section on button click
priorityButton.addEventListener('click', function () {
  priority.appendChild(container);
  console.log('clicked');
});