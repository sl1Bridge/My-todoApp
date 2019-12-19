import {ACTION_TODO_LIST_LOADED} from "./Actions";


const defaultState = {
  listTodo: [
    /*
			* id: string
			* title: string
			* checked: boolean
			* */
  ],
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

    default:
      return state;
  }

};
