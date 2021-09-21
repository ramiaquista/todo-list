// import _ from 'lodash';
import './style.css';

const task1 = {
  description: 'Go to the supermarket',
  completed: false,
  index: 0,
};

const task2 = {
  description: 'Dog Walking',
  completed: false,
  index: 1,
};

const task3 = {
  description: 'Write some js code',
  completed: false,
  index: 2,
};

const toDoTasks = [task1, task2, task3];
const taskList = document.querySelector('#todo-list');

function taskListDisplayed() {
  toDoTasks.forEach((task) => {
    const li = document.createElement('li');
    const labelDes = document.createElement('label');
    const checkBox = document.createElement('input');
    const icon = document.createElement('i');

    checkBox.type = 'checkbox';
    li.classList.add('task');
    icon.classList.add('fas');
    icon.classList.add('fa-ellipsis-v');

    labelDes.innerHTML = task.description;

    li.appendChild(checkBox);
    li.appendChild(labelDes);
    li.appendChild(icon);
    taskList.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const divUl = document.createElement('div');
  const h2 = document.createElement('h2');
  const reloadButton = document.createElement('button');

  divUl.classList.add('todo-title');
  h2.innerHTML = "Today's To Do";
  reloadButton.classList.add('fas');
  reloadButton.classList.add('fa-sync-alt');

  divUl.appendChild(h2);
  divUl.appendChild(reloadButton);
  taskList.appendChild(divUl);

  const form = document.createElement('form');
  const input = document.createElement('input');
  const addIcon = document.createElement('icon');

  input.placeholder = 'Add to your list...';
  input.id = 'add-item';
  addIcon.classList.add('fas');
  addIcon.classList.add('fa-long-arrow-alt-left');

  form.appendChild(input);
  form.appendChild(addIcon);
  taskList.appendChild(form);

  taskListDisplayed();

  const clearButton = document.createElement('button');

  clearButton.classList.add('link-button');
  clearButton.innerHTML = 'Clear all completed';

  taskList.appendChild(clearButton);
});
