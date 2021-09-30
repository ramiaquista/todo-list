import Status from './task-status';
import Crud from './tasks-handler';
import { getLocalStorage, setLocalStorage } from './loadstorage';

export default function addItem(toDoTasks, task, index) {
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

  trashIcon.addEventListener('click', (e) => {
    Crud.removeTask(toDoTasks, li.id);
    setLocalStorage(toDoTasks);
    e.target.closest('li').remove();
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

  return li;
}
