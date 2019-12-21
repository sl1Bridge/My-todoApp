import axios from "axios";
import {reduxStore} from "./index";
import {loadTodoList, setTitleInputStatus, setTitleText, throwErrorStatus} from "./store/actions";


export function getTodoList() {
  axios.get('http://localhost:3000/todos')
    .then(({data}) => {
      this.setState({
        listTodo: data,
      })
    })
    .catch(e => console.log(e));
}

export function getTodos() {
  const axiosResponse = () => {
    return axios.get('http://localhost:3000/todos')
  };

  axiosResponse().then(({data}) => {
    reduxStore.dispatch(loadTodoList(data))
  })
}

export function addNewTodo() {
  const title = {
    title: this.state.titleValue,
    checked: false,
  };

  if (this.state.titleValue) {
    axios.post('http://localhost:3000/todos', title)
      .then(() => this.props.loadTodos())
      .catch(e => {
        console.log(e);
      });

    this.setState({
      titleValue: '',
    });
  } else {
    this.setState({
      isError: true
    });
  }
}

export function createNewTodo(props) {
  const newTodo = {
    title: props.newTodoTitleValue,
    checked: false,
  };

  function axiosResponse() {
    return axios.post('http://localhost:3000/todos', newTodo)
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

export function deletet(todo) {
  axios.delete(`http://localhost:3000/todos/${todo.id}`)
    .then(() => todo.loadTodos())
    .catch(e => console.log(e))
}

export function removeTodo(todo) {
  function axiosResponse() {
   return axios.delete(`http://localhost:3000/todos/${todo.id}`)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    });
}

export function check(todo, e) {
  // props.onCheckTodo(props.id, event.target.checked);
  const checkTodo = {
    title: todo.title,
    checked: e.target.checked
  };

  axios.put(`http://localhost:3000/todos/${todo.id}`, checkTodo)
    .then(() => todo.loadTodos())
    .catch(e => console.log(e))
}

export function checkTodo(todo, event) {
  const checkTodo = {
    title: todo.title,
    checked: event.target.checked
  };

  function axiosResponse() {
    return axios.put(`http://localhost:3000/todos/${todo.id}`, checkTodo)
  }

  axiosResponse()
    .then(() => {
      getTodos()
    })
    .catch(e => {
      console.log(e);
    })
}

export function changeTitle(todo, setIsShowInput, newTitle) {
  const changeTitle = {
    title: newTitle,
    checked: todo.checked,
  };

  axios.put(`http://localhost:3000/todos/${todo.id}`, changeTitle)
    .then(() => {
      todo.loadTodos();
      setIsShowInput(false);
    })
    .catch(e => console.log(e))
}

export function changeTodoTitle(todo) {
  const changeTitle = {
    title: todo.newTitle,
    checked: todo.checked,
  };

  function axiosResponse() {
    return axios.put(`http://localhost:3000/todos/${todo.id}`, changeTitle)
  }

  axiosResponse()
    .then(() =>{
      getTodos();
      reduxStore.dispatch(setTitleInputStatus(false));
    })
    .catch(
      e => console.log(e)
    )
}