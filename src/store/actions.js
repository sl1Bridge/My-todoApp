export const ACTION_TODO_LIST_LOADED = 'ACTION_TODO_LIST_LOADED';
export const ACTION_NEW_TODO_ERROR_THROW = 'ACTION_NEW_TODO_ERROR_THROW';
export const ACTION_NEW_TODO_NAME_CHANGED = 'ACTION_NEW_TODO_NAME_CHANGED';

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