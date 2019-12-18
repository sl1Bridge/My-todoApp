import React from 'react';
import Grid from "@material-ui/core/Grid";
import TodoComponent from "./TodoComponent";

function TodoListComponent(props) {
	const {listTodo, loadTodos} = props;
	return (
		<Grid container
		      spacing={8}
		      classes={{
			      root: 'marginContainer'
		      }}
		>
			{listTodo.map(todo => (
				<TodoComponent key={todo.id}
				               title={todo.title}
				               checked={todo.checked}
				               id={todo.id}
				               loadTodos={loadTodos}
				/>
			))}
		</Grid>
	);
}

export default TodoListComponent;
