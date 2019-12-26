import {addNewTodo, getTodos, loadTodos} from '../api';

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

export const loadTodoListAction = () => {
  return dispatch => { loadTodos().then(({data}) => dispatch(
    {
      type: ACTION_TODO_LIST_LOADED,
      payload: data
    }
  )).catch((e) => console.log(e))
  }
};

export const changeTitleText = (text, status) => {
  return dispatch => {
    dispatch(
      {
        type: ACTION_NEW_TODO_NAME_CHANGED,
        payload: text
      }
    );
    dispatch(
      {
      type: ACTION_NEW_TODO_ERROR_THROW,
      payload: status
      }
    )
  }
};

export const addTodoToList = (todoTitle) => {
  return (dispatch) => {
    if (todoTitle) {
      addNewTodo(todoTitle)
        .then(() => {
          dispatch(
            {
              type: ACTION_NEW_TODO_NAME_CHANGED,
              payload: ''
            },
          );
          loadTodos().then(({data}) => dispatch(
            {
              type: ACTION_TODO_LIST_LOADED,
              payload: data
            }
          ))
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      dispatch(
        {
          type: ACTION_NEW_TODO_ERROR_THROW,
          payload: true
        }
      )
    }
  }
};