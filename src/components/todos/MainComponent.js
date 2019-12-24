import React from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import AddTodoComponent from "./AddTodoComponent";
import TodoListComponent from "./TodoListComponent";
import { getTodos } from "../../api";
import { connect } from 'react-redux';

import imgUrl from '../../img/backImg.png';

class MainComponent extends React.Component {
	componentDidMount() {
		getTodos();
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
						<AddTodoComponent />
						<div style={{
								background: `url(${imgUrl}) no-repeat left top`,
								backgroundSize: '100% auto',
								minHeight: '300px',
								marginBottom: '80px'
							 }}
						>
							<TodoListComponent	listTodo={this.props.listTodo}
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
