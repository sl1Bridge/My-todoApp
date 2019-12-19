import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {addNewTodo} from "../../api";

class AddTodoComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			titleValue: '',
			isError: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		event.preventDefault();
		this.setState({
			titleValue: event.target.value,
			isError: false
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		addNewTodo.bind(this)();
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
						           value={this.state.titleValue}
						           onChange={this.handleChange}
						           error={this.state.isError}
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

export default AddTodoComponent;
