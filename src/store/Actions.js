export const ACTION_TODO_LIST_LOADED = Symbol('ACTION_TODO_LIST_LOADED');

export const loadTodoList = (todos) => {
  return {
    type: ACTION_TODO_LIST_LOADED,
    payload: todos
  }
};