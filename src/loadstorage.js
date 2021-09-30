const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todoTasks'));
  if (data === null) {
    localStorage.setItem('todoTasks', JSON.stringify([]));
    return [];
  }
  return data;
};

const setLocalStorage = (toDoTasks) => {
  localStorage.setItem('todoTasks', JSON.stringify(toDoTasks));
};

module.exports = { getLocalStorage, setLocalStorage };
