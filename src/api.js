import axios from "axios";

const apiURL = 'http://localhost:3000';

export function loadTodos() {
  return axios.get(`${apiURL}/todos`)
}

export function addNewTodo(todoTitle) {
  const newTodo = {
    title: todoTitle,
    checked: false,
  };

  return axios.post(`${apiURL}/todos`, newTodo)
}

export function updateTodoStatus(todoTitle, todoId, checked) {
  const checkTodo = {
    title: todoTitle,
    checked: checked,
  };

    return axios.put(`${apiURL}/todos/${todoId}`, checkTodo)
}

export function changeTitle(todoStatus, todoId, setIsShowInput, newTitle) {
  const changeTitle = {
    title: newTitle,
    checked: todoStatus,
  };

    return axios.put(`${apiURL}/todos/${todoId}`, changeTitle)
}

export function removeTodo(todoId) {
    return axios.delete(`${apiURL}/todos/${todoId}`)
}