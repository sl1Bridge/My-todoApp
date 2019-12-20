import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddTodoComponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";
import {getTodoList, getTodos} from "../../api";
import { connect } from 'react-redux';

import imgUrl from '../../img/backImg.png';

// ГЛАВНЫЙ КОМПОНЕНТ, В КОТОРОМ ХРАНИТСЯ СПИСОК ДЕЛ
// И ВСЕ ФУНКЦИИ РАБОТЫ С НИМ
class MainComponent extends React.Component {
	constructor(props) {
		super(props);
		//создаем хранилище
		this.state = {
			listTodo: []
			/*
			* id: string
			* title: string
			* checked: boolean
			* */
		};
		// определяем контекст вызова функций
		this.loadTodos = this.loadTodos.bind(this);
	}

	componentDidMount() {
		getTodos();
		getTodoList.bind(this)()
	}

	loadTodos() {
		getTodoList.bind(this)()
	}

	render() {
		return (
			<Grid container
			      justify="center"
			>
				<Grid item
				      xs={4}
				>
					<Paper>
						<AddTodoComponent loadTodos={this.loadTodos}/>
						<div style={{
								background: `url(${imgUrl}) no-repeat left top`,
								backgroundSize: '100% auto',
								minHeight: '300px'
							 }}
						>
							<TodoListComponent listTodo={this.state.listTodo}
							                   loadTodos={this.loadTodos}
							/>
						</div>
					</Paper>
				</Grid>
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		listTodo: state.listTodo
	}
};

export default connect(mapStateToProps)(MainComponent);
