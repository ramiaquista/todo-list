import './style.css';
import Status from './task-status';
import Crud from './tasks-handler';
import getLocalStorage from './loadstorage';
import clearAllCompletedTasks from './clearAll';

let toDoTasks = getLocalStorage();

function setLocalStorage(toDoTasks) {
  localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));
}

const taskList = document.querySelector('#todo-list');
const clearButton = document.querySelector('.link-button');

function addItem(task, index) {
  const li = document.createElement('li');
  const labelDes = document.createElement('label');
  const checkBox = document.createElement('input');
  const icon = document.createElement('i');
  const trashIcon = document.createElement('i');

  checkBox.type = 'checkbox';
  checkBox.classList.add('checkBox');
  checkBox.id = 'unmarked';
  li.classList.add('task');
  li.id = index;
  icon.classList.add('fas');
  icon.classList.add('fa-ellipsis-v');
  icon.id = 'move';
  labelDes.contentEditable = false;
  trashIcon.classList.add('fas');
  trashIcon.classList.add('fa-trash-alt');
  trashIcon.classList.add('hidden');

  labelDes.innerHTML = task.description;

  li.appendChild(checkBox);
  li.appendChild(labelDes);
  li.appendChild(icon);
  li.appendChild(trashIcon);
  taskList.insertBefore(li, clearButton);

  li.addEventListener('click', () => {
    labelDes.contentEditable = true;
    if (trashIcon.classList.contains('hidden')) {
      li.classList.add('task-pressed');
      trashIcon.classList.remove('hidden');
      icon.classList.add('hidden');
    } else {
      li.classList.remove('task-pressed');
      icon.classList.remove('hidden');
      trashIcon.classList.add('hidden');
    }
  });

  labelDes.addEventListener('input', () => {
    Crud.updateDescription(toDoTasks, li.id, labelDes.innerText);
    setLocalStorage(toDoTasks);
  });

  trashIcon.addEventListener('click', () => {
    Crud.removeTask(toDoTasks, li.id);
    setLocalStorage(toDoTasks);
    // eslint-disable-next-line no-use-before-define
    taskListDisplayed(toDoTasks);
  });

  const data = JSON.parse(localStorage.getItem('todoTasks'));
  if (data) {
    if (data[index].completed === true) {
      checkBox.id = 'marked';
      checkBox.checked = true;
      labelDes.classList.add('checked');
    } else {
      checkBox.id = 'unmarked';
      checkBox.checked = false;
    }
  }

  checkBox.addEventListener('change', () => {
    if (Status.boxNotMarked(checkBox)) {
      labelDes.classList.add('checked');
      checkBox.id = 'marked';
      toDoTasks[index].completed = true;
      setLocalStorage(toDoTasks);
    } else {
      labelDes.classList.remove('checked');
      checkBox.id = 'unmarked';
      toDoTasks[index].completed = false;
      setLocalStorage(toDoTasks);
    }
  });

  return li.outerHTML;
}

function taskListDisplayed(toDoTasks) {
  if (taskList.hasChildNodes()) {
    const nodesArray = document.querySelectorAll('.task');
    nodesArray.forEach((node) => {
      taskList.removeChild(node);
    });
  }
  toDoTasks.forEach((task, index) => {
    addItem(task, index);
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
  taskList.insertBefore(divUl, clearButton);

  const form = document.createElement('form');
  const input = document.createElement('input');
  const addIcon = document.createElement('icon');

  input.placeholder = 'Add to your list...';
  input.id = 'add-item';
  addIcon.classList.add('fas');
  addIcon.classList.add('fa-long-arrow-alt-left');

  form.appendChild(input);
  form.appendChild(addIcon);
  taskList.insertBefore(form, clearButton);

  if (addIcon) {
    addIcon.addEventListener('click', () => {
      Crud.addTask(toDoTasks, input.value);
      setLocalStorage(toDoTasks);
      taskListDisplayed(toDoTasks);
      input.value = '';
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      toDoTasks = clearAllCompletedTasks(toDoTasks);
      setLocalStorage(toDoTasks);
      taskListDisplayed(toDoTasks);
    });
  }

  taskListDisplayed(toDoTasks);
});
