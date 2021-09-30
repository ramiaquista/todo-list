const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem('todoTasks'));
  if (data === null) {
    localStorage.setItem('todoTasks', JSON.stringify([]));
    return [];
  }
  return data;
};

module.exports = getLocalStorage;
