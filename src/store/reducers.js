import {
  ACTION_NEW_TODO_ERROR_THROW,
  ACTION_NEW_TODO_NAME_CHANGED,
  ACTION_SHOW_CHANGE_TITLE_INPUT,
  ACTION_TODO_LIST_LOADED, ACTION_TODO_NAME_CHANGED
} from "./actions";


const defaultState = {
  listTodo: [
    /*
			* id: string
			* title: string
			* checked: boolean
			* */
  ],
  newTodoTitleValue: '',
  errorStatus: false,
  newTitle: '',
  showInputStatus: false,
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTION_TODO_LIST_LOADED:
    {
      return {
        ...state,
        listTodo: action.payload
      };
    }

    case ACTION_NEW_TODO_ERROR_THROW:
    {
      return {
        ...state,
        errorStatus: action.payload
      };
    }

    case ACTION_NEW_TODO_NAME_CHANGED:
    {
      return {
        ...state,
        newTodoTitleValue: action.payload
      };
    }

    case ACTION_SHOW_CHANGE_TITLE_INPUT:
    {
      return {
        ...state,
        showInputStatus: action.payload
      };
    }

    case ACTION_TODO_NAME_CHANGED:
    {
      return {
        ...state,
        newTitle: action.payload
      };
    }

    default:
      return state;
  }

};
