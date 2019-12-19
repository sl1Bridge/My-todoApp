import axios from "axios";

export function getTodoList() {
  axios.get('http://localhost:3000/todos')
    .then(({data}) => {
      this.setState({
        listTodo: data,
      })
    })
    .catch(e => console.log(e));
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

export function removeTodo(todo) {
  axios.delete(`http://localhost:3000/todos/${todo.id}`)
    .then(() => todo.loadTodos())
    .catch(e => console.log(e))
}

export function checkTodo(todo, e) {
  // props.onCheckTodo(props.id, event.target.checked);
  const checkTodo = {
    title: todo.title,
    checked: e.target.checked
  };

  axios.put(`http://localhost:3000/todos/${todo.id}`, checkTodo)
    .then(() => todo.loadTodos())
    .catch(e => console.log(e))
}

export function changeTodoTitle(todo, setIsShowInput, newTitle) {
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