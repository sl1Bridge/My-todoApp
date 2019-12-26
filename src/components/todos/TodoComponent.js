import React from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Close from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";
import IconButton from '@material-ui/core/IconButton';
import {changeTodoTitleAction, checkTodoAction, removeTodoAction} from "../../store/actions";
import {connect} from "react-redux";

const TodoComponent = (props) => {
	const {checked, title, id, onStatusChange, onSaveBtnClick, onRemoveBtnClick} = props;

	const [newTitle, setNewTitle] = React.useState(title);
	const [isShowInput, setIsShowInput] = React.useState(false);

	return (
		<Grid item
		      container
		      xs={12}
		      classes={{
		      	item: 'perfectTodo'
		      }}
		>
			<Grid item
			      xs={3}
			      container
			      alignItems="center"
			>
				<Checkbox checked={checked}
				          onChange={(event) => onStatusChange(title, id, event.target.checked)}
									disabled={isShowInput}
				/>
			</Grid>
			<Grid item
			      xs={6}
			      container
			      alignItems="center"
			>
				{!isShowInput &&
					<Typography variant="h5"
				            classes={{
				            	root: checked ? 'line' : 'defaultText'
				            }}
				            onClick={() => setIsShowInput(true)}
					>
					{title}
				</Typography>}
				{isShowInput &&
					<Input value={newTitle}
						   onChange={(event) => setNewTitle(event.target.value)}
						   endAdornment={
						   		<IconButton onClick={() => onSaveBtnClick(checked, id, setIsShowInput, newTitle)}>
						   			<Check />
						   		</IconButton>
						   }
					/>
				}
			</Grid>
			<Grid item
			      xs={3}
			>
				<Fab onClick={() => onRemoveBtnClick(id)}
					 disabled={isShowInput}
				>
					<Close />
				</Fab>
			</Grid>
		</Grid>
	);
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
	onStatusChange: (title, id, checked) => dispatch(checkTodoAction(title, id, checked)),
	onSaveBtnClick: (checked, id, setIsShowInput, newTitle) => dispatch(changeTodoTitleAction(checked, id, setIsShowInput, newTitle)),
	onRemoveBtnClick: (id) => dispatch(removeTodoAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
