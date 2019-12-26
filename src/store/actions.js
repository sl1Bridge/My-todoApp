import {addNewTodo, changeTitle, loadTodos, removeTodo, updateTodoStatus} from '../api';

export const ACTION_TODO_LIST_LOADED = 'ACTION_TODO_LIST_LOADED';
export const ACTION_NEW_TODO_ERROR_THROW = 'ACTION_NEW_TODO_ERROR_THROW';
export const ACTION_NEW_TODO_NAME_CHANGED = 'ACTION_NEW_TODO_NAME_CHANGED';

export const loadTodoListAction = () => {
  return dispatch => { loadTodos().then(({data}) => dispatch(
    {
      type: ACTION_TODO_LIST_LOADED,
      payload: data
    }
  )).catch((e) => console.log(e))
  }
};

export const changeTitleTextAction = (text, status) => {
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

export const addTodoToListAction = (todoTitle) => {
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

export const checkTodoAction = (todoTitle, todoId, checked) => {
  return (dispatch) => {
    updateTodoStatus(todoTitle, todoId, checked)
      .then(() => (
        loadTodos().then(({data}) => dispatch(
          {
            type: ACTION_TODO_LIST_LOADED,
            payload: data
          }
        ))
      ))
  }
};

export const changeTodoTitleAction = (checked, id, setIsShowInput, newTitle) => {
  return (dispatch) => {
    changeTitle(checked, id, setIsShowInput, newTitle)
      .then(() => (
        loadTodos().then(({data}) => dispatch(
          {
            type: ACTION_TODO_LIST_LOADED,
            payload: data
          }
        ))
      ));
    setIsShowInput(false)
  }
};

export const removeTodoAction = (todoId) => {
  return (dispatch) => {
    removeTodo(todoId)
      .then(() => (
        loadTodos().then(({data}) => dispatch(
          {
            type: ACTION_TODO_LIST_LOADED,
            payload: data
          }
        ))
      ));
  }
};