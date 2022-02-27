const button = document.getElementById('addTask');
const container = document.getElementById('container');
const flexContainers = document.querySelectorAll('.drag-container');
const grayOut = document.querySelectorAll('.grayOut');

//When addTask button is clicked add a new task to main div
button.addEventListener('click', function () {

  const newElement = document.createElement('div');
  newElement.className = 'draggables';
  newElement.innerHTML = '<div draggable="true" class="inner"><button type="button" class="complete">Complete</button><input class="input"><a href="#" class="delete"><img src="trashcan.svg"></a></div>';
  container.append(newElement);

  handleGrayOut();

  // Drag task functions
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

});

// When the complete button is clicked toggle gray out on that task
function handleGrayOut() {
  let completeButtons = document.querySelectorAll('.complete');

  for (let i = 0; i < completeButtons.length; i++) {
    let singleCompleteButton = completeButtons[i];

    singleCompleteButton.onclick = function () {
      this.parentElement.classList.toggle('grayOut');
    }
  }
}



