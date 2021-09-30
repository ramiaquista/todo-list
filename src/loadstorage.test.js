const localActions = require('./loadstorage');

const localStorageMock = {
  getItem: jest.fn(() => 1),
  setItem: jest.fn(),
  clear: jest.fn(),
};

global.localStorage = localStorageMock;

describe('Testing local storage with mock', () => {
  test('Set Item function call', () => {
    localActions.setLocalStorage();
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('Get Item function call', () => {
    localActions.getLocalStorage();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
});
