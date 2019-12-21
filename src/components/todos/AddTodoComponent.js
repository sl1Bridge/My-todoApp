import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createNewTodo} from "../../api";
import {connect} from "react-redux";
import {setTitleText, throwErrorStatus} from "../../store/actions";

class AddTodoComponent extends React.Component {
	render() {
		return (
			<form onSubmit={(event) => {
				event.preventDefault();
				createNewTodo(this.props.newTodoTitleValue);
			}}>
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
												value={this.props.newTodoTitleValue}
						           onChange={(event) => {
													event.preventDefault();
												 this.props.setTitleText(event.target.value);
												 this.props.throwErrorStatus(false)
						           	}}
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
