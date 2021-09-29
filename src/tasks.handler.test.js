// const addTask = require('./tasks-handler');
const crud = require('./tasks-handler');

const testArray = [];

describe('Adding new tasks', () => {
  test('Adding Hi Task', () => {
    const result = crud.addTask(testArray, 'Hi');
    expect(result).toBe(1);
  });
  test('Adding an empty new task', () => {
    const result = crud.addTask(testArray, '');
    expect(result).toBe(0);
  });
});
