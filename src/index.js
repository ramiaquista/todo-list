// import _ from 'lodash';
/* eslint-disable prefer-destructuring */
import './style.css';
import Status from './task-status';

const dataStorage = JSON.parse(localStorage.getItem('todoTasks'));

let task1 = {
  description: 'Go to the supermarket',
  completed: false,
  index: 0,
};

task1 = dataStorage[0];

let task2 = {
  description: 'Dog Walking',
  completed: false,
  index: 1,
};

task2 = dataStorage[1];

let task3 = {
  description: 'Write some js code',
  completed: false,
  index: 2,
};

task3 = dataStorage[2];

const toDoTasks = [task1, task2, task3];
const taskList = document.querySelector('#todo-list');

function setLocalStorage() {
  localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));
}

function taskListDisplayed() {
  toDoTasks.forEach((task, index) => {
    const li = document.createElement('li');
    const labelDes = document.createElement('label');
    const checkBox = document.createElement('input');
    const icon = document.createElement('i');

    checkBox.type = 'checkbox';
    checkBox.classList.add('checkBox');
    li.classList.add('task');
    icon.classList.add('fas');
    icon.classList.add('fa-ellipsis-v');

    labelDes.innerHTML = task.description;

    li.appendChild(checkBox);
    li.appendChild(labelDes);
    li.appendChild(icon);
    taskList.appendChild(li);

    const data = JSON.parse(localStorage.getItem('todoTasks'));

    if (data[index].completed === true) {
      checkBox.id = 'marked';
      checkBox.checked = true;
      labelDes.classList.add('checked');
    } else {
      checkBox.id = 'unmarked';
      checkBox.checked = false;
    }
    checkBox.addEventListener('change', () => {
      if (Status.boxNotMarked(checkBox)) {
        labelDes.classList.add('checked');
        checkBox.id = 'marked';
        toDoTasks[index].completed = true;
        setLocalStorage();
      } else {
        labelDes.classList.remove('checked');
        checkBox.id = 'unmarked';
        toDoTasks[index].completed = false;
        setLocalStorage();
      }
    });
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
