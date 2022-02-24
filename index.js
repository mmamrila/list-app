const button = document.getElementById('addTask');
const container = document.getElementById('container');
const flexContainers = document.querySelectorAll('.drag-container');
const grayOut = document.querySelectorAll('.grayOut');

button.addEventListener('click', function () {

  const newElement = document.createElement('div');
  newElement.className = 'draggables';
  newElement.innerHTML = '<div draggable="true"><button type="button" class="complete">Complete</button><input class="input"><button type="button" class="delete">Delete</button></div>';
  container.append(newElement);


  const draggables = document.querySelectorAll('.draggables');

  for (i of draggables) {
    i.addEventListener('dragstart', dragStart);
    i.addEventListener('dragend', dragEnd);
  }

  function dragStart() {
    dragItem = this;
    setTimeout(() => this.style.display = 'none', 0);
  }
  function dragEnd() {
    setTimeout(() => this.style.display = 'block', 0);
    dragItem = null;
  }

  for (j of flexContainers) {
    j.addEventListener('dragover', dragOver);
    j.addEventListener('dragenter', dragEnter);
    j.addEventListener('dragleave', dragLeave);
    j.addEventListener('drop', drop);
  }
  function drop() {
    this.append(dragItem);
  }
  function dragOver(e) {
    e.preventDefault();
    this.style.border = '2px dotted black';
  }
  function dragEnter(e) {
    e.preventDefault();
  }
  function dragLeave() {
    this.style.border = '0px';
  }

  // Gray out section not working yet
  const complete = document.querySelectorAll('.complete');

  for (i of complete) {
    i.addEventListener('click', click);
  }

  function click() {
    draggables.classList.toggle('grayOut');
  }

});



