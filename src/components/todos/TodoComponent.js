import React from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Close from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";
import IconButton from '@material-ui/core/IconButton';
import {removeTodo, checkTodo, changeTodoTitle} from "../../api";

function TodoComponent(props) {
	const [newTitle, setNewTitle] = React.useState(props.title);
	const [isShowInput, setIsShowInput] = React.useState(false);
	
	const handleChange = event => {
		checkTodo(props, event);
	};

	const handleClick = () => {
		removeTodo(props);
	};

	const onClickShowInput = () => {
		setIsShowInput(true);
	};

	const onChangeInput = (event) => {
		setNewTitle(event.target.value);
	};

	const onCLickSaveTitle = () => {
		changeTodoTitle(props, setIsShowInput, newTitle);
	};

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
				<Checkbox checked={props.checked}
				          onChange={handleChange}
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
				            	root: props.checked ? 'line' : 'defaultText'
				            }}
				            onClick={onClickShowInput}
					>
					{props.title}
				</Typography>}
				{isShowInput &&
					<Input value={newTitle}
						   onChange={onChangeInput}
						   endAdornment={
						   		<IconButton onClick={onCLickSaveTitle}>
						   			<Check />
						   		</IconButton>
						   }
					/>
				}
			</Grid>
			<Grid item
			      xs={3}
			>
				<Fab onClick={handleClick}
					 disabled={isShowInput}
				>
					<Close />
				</Fab>
			</Grid>
		</Grid>
	);
}

export default TodoComponent;
