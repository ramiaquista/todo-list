const getLocalStorage = () => {
  const data = [
    {
      description: 'asd',
      completed: false,
      index: 0,
    },
  ];
  if (data === null) {
    return [];
  }
  return data;
};

module.exports = getLocalStorage;
