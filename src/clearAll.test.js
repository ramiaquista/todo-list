const clearAllCompletedTasks = require('./clearAll');

const emptyTasks = () => [];

const toDoTask = () => [
  {
    description: 'Lorem Ipsum',
    completed: false,
    index: 0,
  },
];

const toDoTask2 = () => [
  {
    description: 'Lorem Ipsum',
    completed: false,
    index: 0,
  },
  {
    description: 'What ever',
    completed: true,
    index: 1,
  },
];

const toDoTask3 = () => [
  {
    description: 'Lorem Ipsum',
    completed: true,
    index: 0,
  },
  {
    description: 'What ever',
    completed: true,
    index: 1,
  },
];

describe('Clearing tasks that are completed', () => {
  test('Delete but the task is not completed', () => {
    expect(clearAllCompletedTasks(toDoTask())).toStrictEqual(toDoTask());
  });
  test('Delete one completed task', () => {
    expect(clearAllCompletedTasks(toDoTask2())).toStrictEqual(toDoTask());
  });
  test('Delete two completed tasks', () => {
    expect(clearAllCompletedTasks(toDoTask3())).toStrictEqual(emptyTasks());
  });
});
