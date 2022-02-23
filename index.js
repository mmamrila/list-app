const button = document.getElementById('addTask');
const container = document.getElementById('container');
const priority = document.getElementById('priority');
const flexContainers = document.querySelectorAll('.drag-container');

button.addEventListener('click', function () {

  // let priorityId = "priorityId" + Math.random().toString(16).slice(2);
  // const priorityHex = document.getElementById(priorityId);
  const newElement = document.createElement('div');
  newElement.className = 'draggables';
  newElement.innerHTML = '<div draggable="true"><button type="button" class="complete">Complete</button><input class="input"><button type="button" class="delete">Delete</button></div>';
  container.append(newElement);

  // Move task element to priority section on button click
  // When priority button is clicked 
  // Find what task this button belongs to
  // Select that task
  // Move selected task to priority section

  // priorityHex.addEventListener('click', function () {
  //   priority.appendChild(this.id);
  //   console.log('clicked');
  //   console.log(priorityHex);
  // });

  // console.log(priorityId);
  const draggables = document.querySelectorAll('.draggables');

  draggables.forEach(function (draggable) {
    draggable.addEventListener('dragstart', function () {
      console.log('dragstart')
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', function () {
      draggable.classList.remove('dragging')
    })
  })

  flexContainers.forEach(function (containerDrag) {
    containerDrag.addEventListener('dragover', function (e) {
      e.preventDefault()
      const afterElement = getDragAfterElement(containerDrag, e.clientY)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        containerDrag.appendChild(draggable)
      } else {
        container.insertBefore(draggable, afterElement)
      }

    })
  })

  function getDragAfterElement(containerDrag, y) {
    const draggableElements = [...containerDrag.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce(function (closest, child) {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      console.log(offset)
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }

});

