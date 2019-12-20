import {ACTION_NEW_TODO_ERROR, ACTION_NEW_TODO_NAME_CHANGED, ACTION_TODO_LIST_LOADED} from "./actions";


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

    case ACTION_NEW_TODO_ERROR:
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

    default:
      return state;
  }

};
