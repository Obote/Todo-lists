/* eslint-disable no-unused-vars */
import './style.css';

const listItems = [
  {
    description: 'Go to the gym',
    completed: false,
    index: 0,
  },
  {
    description: 'Prepare breakfast',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash dishes',
    completed: false,
    index: 2,
  },
];

function createList(taskList) {
  return `
    <div class="task">
      <input type="checkbox">
      <p>${taskList.description}</p>
      <i class="icon-ellipsis-vertical"></i>
    </div>
  `;
}

const taskUl = document.querySelector('.task-display');

listItems.forEach((taskList) => {
  const list = document.createElement('list');
  list.innerHTML = createList(taskList);
  taskUl.appendChild(list);
});