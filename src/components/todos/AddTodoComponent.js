import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {addTodoToList, changeTitleText, loadTodoListAction, setTitleText, throwErrorStatus} from "../../store/actions";

const AddTodoComponent = ({newTodoTitleValue, errorStatus, onInputChange, onAddBtnClick}) => {
	return (
		<form onSubmit={(event) => {event.preventDefault();
																onAddBtnClick(newTodoTitleValue)}}>
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
											value={newTodoTitleValue}
										 onChange={(event) => onInputChange(event)}
										 error={errorStatus}
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

const mapDispatchToProps = (dispatch) => ({
	onInputChange: (event) => dispatch(changeTitleText(event.target.value, false)),
	onAddBtnClick: (newTodoTitleValue) => dispatch(addTodoToList(newTodoTitleValue, () => loadTodoListAction())),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoComponent);
