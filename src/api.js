import axios from "axios";
import {reduxStore} from "./index";
import {loadTodoList, setTitleText, throwErrorStatus} from "./store/actions";

const apiURL = 'http://localhost:3000';

export function getTodos() {
  const axiosResponse = () => {
    return axios.get(`${apiURL}/todos`)
  };

  axiosResponse().then(({data}) => {
    reduxStore.dispatch(loadTodoList(data))
  })
}

export function loadTodos() {
  return axios.get(`${apiURL}/todos`)
}

export function createNewTodo(todoTitle) {
  const newTodo = {
    title: todoTitle,
    checked: false,
  };

  function axiosResponse() {
    return axios.post(`${apiURL}/todos`, newTodo)
  }

  if (todoTitle) {
    axiosResponse()
      .then(() => {
        reduxStore.dispatch(setTitleText(''));
        getTodos()
      })
      .catch(e => {
        console.log(e);
      });
  } else {
     reduxStore.dispatch(throwErrorStatus(true))
  }
}

export function addNewTodo(todoTitle) {
  const newTodo = {
    title: todoTitle,
    checked: false,
  };

  return axios.post(`${apiURL}/todos`, newTodo)
}

export function removeTodo(todoId) {
  function axiosResponse() {
    return axios.delete(`${apiURL}/todos/${todoId}`)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    });
}

export function checkTodo(todoTitle, todoId, checked) {
  const checkTodo = {
    title: todoTitle,
    checked: checked,
  };

  function axiosResponse() {
    return axios.put(`${apiURL}/todos/${todoId}`, checkTodo)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    })
}

export function changeTodoTitle(todoStatus, todoId, setIsShowInput, newTitle) {
  const changeTitle = {
    title: newTitle,
    checked: todoStatus,
  };

  function axiosResponse() {
    return axios.put(`${apiURL}/todos/${todoId}`, changeTitle)
  }

  axiosResponse()
    .then(() =>{
      getTodos();
      setIsShowInput(false);
    })
    .catch(
      e => console.log(e)
    )
}