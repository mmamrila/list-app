const button = document.getElementById('addTask');
const container = document.getElementById('container');
const flexContainers = document.querySelectorAll('.drag-container');

button.addEventListener('click', function () {


  const newElement = document.createElement('div');
  newElement.className = 'draggables';
  newElement.innerHTML = '<div draggable="true"><button type="button" class="complete">Complete</button><input class="input"><button type="button" class="delete">Delete</button></div>';
  container.append(newElement);




  // Make newElements draggable
  const draggables = document.querySelectorAll('.draggables');

  // Draggable event listeners
  draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging')
    })
  })

  flexContainers.forEach(containerDrag => {
    containerDrag.addEventListener('dragover', e => {
      e.preventDefault()
      const afterElement = getDragAfterElement(containerDrag, e.clientY)
      console.log(afterElement)
      const draggable = document.querySelector('.dragging')
      if (afterElement == null) {
        containerDrag.appendChild(draggable)
      } else {
        containerDrag.insertBefore(draggable, afterElement)
      }
    })
  })

  function getDragAfterElement(containerDrag, y) {
    const draggableElements = [...containerDrag.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
      const box = child.getBoundingClientRect()
      const offset = y - box.top - box.height / 2
      // console.log(offset)
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child }
      } else {
        return closest
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element
  }


});
