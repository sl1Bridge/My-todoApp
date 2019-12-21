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

export function createNewTodo(props) {
  const newTodo = {
    title: props.newTodoTitleValue,
    checked: false,
  };

  function axiosResponse() {
    return axios.post(`${apiURL}/todos`, newTodo)
  }

  if (props.newTodoTitleValue) {
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

export function removeTodo(todo) {
  function axiosResponse() {
   return axios.delete(`${apiURL}/todos/${todo.id}`)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    });
}

export function checkTodo(todo, event) {
  const checkTodo = {
    title: todo.title,
    checked: event.target.checked
  };

  function axiosResponse() {
    return axios.put(`${apiURL}/todos/${todo.id}`, checkTodo)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    })
}

export function changeTodoTitle(todo, setIsShowInput, newTitle) {
  const changeTitle = {
    title: newTitle,
    checked: todo.checked,
  };

  function axiosResponse() {
    return axios.put(`${apiURL}/todos/${todo.id}`, changeTitle)
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