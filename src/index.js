import './style.css';
import addItem from './addItem';
import Crud from './tasks-handler';
import { getLocalStorage, setLocalStorage } from './loadstorage';
import clearAllCompletedTasks from './clearAll';

let toDoTasks = getLocalStorage();

const boxList = document.querySelector('#box');
const clearButton = document.querySelector('.link-button');

function taskListDisplayed(ul, toDoTasks) {
  while (ul.hasChildNodes()) ul.removeChild(ul.firstChild);

  toDoTasks.forEach((task, index) => {
    ul.appendChild(addItem(toDoTasks, task, index), clearButton);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const top = document.createElement('div');
  const h2 = document.createElement('h2');
  const reloadButton = document.createElement('button');

  const ul = document.createElement('ul');

  const form = document.createElement('form');
  const input = document.createElement('input');
  const addIcon = document.createElement('icon');

  h2.innerHTML = "Today's To Do";
  reloadButton.classList.add('fas');
  reloadButton.classList.add('fa-sync-alt');

  top.appendChild(h2);
  top.appendChild(reloadButton);
  top.classList.add('todo-title');

  boxList.appendChild(top);

  input.placeholder = 'Add to your list...';
  input.id = 'add-item';
  addIcon.classList.add('fas');
  addIcon.classList.add('fa-long-arrow-alt-left');

  form.append(input, addIcon);
  boxList.appendChild(form);
  boxList.appendChild(ul);

  if (addIcon) {
    addIcon.addEventListener('click', () => {
      Crud.addTask(toDoTasks, input.value);
      setLocalStorage(toDoTasks);
      taskListDisplayed(ul, toDoTasks);
      input.value = '';
    });
  }

  if (clearButton) {
    clearButton.addEventListener('click', () => {
      toDoTasks = clearAllCompletedTasks(toDoTasks);
      setLocalStorage(toDoTasks);
      taskListDisplayed(ul, toDoTasks);
    });
  }

  boxList.appendChild(clearButton);

  taskListDisplayed(ul, toDoTasks);
});
