import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addNewTodo, createNewTodo} from "../../api";
import {connect} from "react-redux";
import {setTitleText, throwErrorStatus} from "../../store/actions";

class AddTodoComponent extends React.Component {
	constructor(props) {
		super(props);
/*		this.state = {
			titleValue: '',
			isError: false
		};*/
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.props.setTitleText(event.target.value);
		this.props.throwErrorStatus(false);
/*		this.setState({
			titleValue: event.target.value,
			isError: false
		});*/
	}

	handleSubmit(event) {
		event.preventDefault();
/*		addNewTodo.bind(this)();*/
		createNewTodo(this.props);
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Grid container
				      spacing={8}
				      classes={{
				      	root: 'marginContainer'
				      }}
				>
					<Grid item
					      xs={9}
					>
						<TextField label="Title"
						           /*value={this.state.titleValue}*/
												value={this.props.newTodoTitleValue}
						           onChange={this.handleChange}
						           /*error={this.state.isError}*/
											 error={this.props.errorStatus}
						           fullWidth
						/>
					</Grid>
					<Grid item
					      xs={3}
					      container
					      justify="flex-end"
					>
						<Button color="primary"
						        variant="contained"
						        type="submit"
						        size="large"
						>
							Add
						</Button>
					</Grid>
				</Grid>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		newTodoTitleValue: state.newTodoTitleValue,
		errorStatus: state.errorStatus
	}
};

const mapDispatchToProps = {
	setTitleText,
	throwErrorStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);
