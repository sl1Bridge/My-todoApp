import React, {useEffect} from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddTodoComponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";
import { connect } from 'react-redux';

import imgUrl from '../../img/backImg.png';
import {loadTodoListAction} from "../../store/actions";

const MainComponent = ({onScreenLoad, listTodo}) => {

	useEffect(() => {onScreenLoad()},[onScreenLoad]);

		return (
			<Grid container
			      justify="center"
			>
				<Grid item
				      xs={4}
							classes={{
								root: 'todo-list'
							}}
				>
					<Paper>
						<AddTodoComponent />
						<div style={{
								background: `url(${imgUrl}) no-repeat left top`,
								backgroundSize: '100% auto',
								minHeight: '300px',
								marginBottom: '80px'
							 }}
						>
							<TodoListComponent	listTodo={listTodo}
							/>
						</div>
					</Paper>
				</Grid>
			</Grid>
		);
};

const mapStateToProps = (state) => {
	return {
		listTodo: state.listTodo
	}
};

const mapDispatchToProps = (dispatch) => ({
		onScreenLoad: () => dispatch(loadTodoListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
