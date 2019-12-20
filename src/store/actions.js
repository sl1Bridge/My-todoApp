export const ACTION_TODO_LIST_LOADED = Symbol('ACTION_TODO_LIST_LOADED');
export const ACTION_NEW_TODO_ERROR_THROW = Symbol('ACTION_NEW_TODO_ERROR_THROW');
export const ACTION_NEW_TODO_NAME_CHANGED = Symbol('ACTION_NEW_TODO_NAME_CHANGED');
export const ACTION_TODO_NAME_CHANGED = Symbol('ACTION_TODO_NAME_CHANGED');
export const ACTION_SHOW_CHANGE_TITLE_INPUT = Symbol('ACTION_SHOW_CHANGE_TITLE_INPUT');

export const loadTodoList = (items) => {
  return {
    type: ACTION_TODO_LIST_LOADED,
    payload: items
  }
};

export const throwErrorStatus = (status) => {
  return {
    type: ACTION_NEW_TODO_ERROR_THROW,
    payload: status
  }
};

export const setTitleText = (text) => {
  return {
    type: ACTION_NEW_TODO_NAME_CHANGED,
    payload: text
  }
};

export const setTitleInputStatus = (status) => {
  return {
    type: ACTION_SHOW_CHANGE_TITLE_INPUT,
    payload: status
  }
};

export const changeTitleText = (text) => {
  return {
    type: ACTION_TODO_NAME_CHANGED,
    payload: text
  }
};