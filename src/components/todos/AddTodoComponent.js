import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createNewTodo} from "../../api";
import {connect} from "react-redux";
import {setTitleText, throwErrorStatus} from "../../store/actions";

const AddTodoComponent = (props) => {
	return (
		<form onSubmit={(event) => {
			event.preventDefault();
			createNewTodo(props.newTodoTitleValue);
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
											value={props.newTodoTitleValue}
										 onChange={(event) => {
												event.preventDefault();
											 props.setTitleText(event.target.value);
											 props.throwErrorStatus(false)
											}}
										 error={props.errorStatus}
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
};

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
