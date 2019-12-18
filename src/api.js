import axios from "axios";

export function getTodoList(context) {
  axios.get('http://localhost:3000/todos')
    .then(({data}) => {
      context.setState({
        listTodo: data,
      })
    })
    .catch(e => console.log(e));
}

export function addNewTodo(todo) {
  const title = {
    title: todo.state.titleValue,
    checked: false,
  };

  if (todo.state.titleValue) {
    axios.post('http://localhost:3000/todos', title)
      .then(() => todo.props.loadTodos())
      .catch(e => {
        console.log(e);
      });

    todo.setState({
      titleValue: '',
    });
  } else {
    todo.setState({
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