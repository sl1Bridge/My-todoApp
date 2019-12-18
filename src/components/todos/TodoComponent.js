import React from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Close from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";
import IconButton from '@material-ui/core/IconButton';

function TodoComponent(props) {
	const [newTitle, setNewTitle] = React.useState(props.title);
	const [isShowInput, setIsShowInput] = React.useState(false);
	
	const handleChange = event => {
		console.log(event.target.checked);
		// props.onCheckTodo(props.id, event.target.checked);
		fetch(`http://localhost:3000/todos/${props.id}`, {
			method: 'PUT',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				title: props.title,
				checked: event.target.checked
			})
		})
			.then(res => {
				if (res.status === 200) {
					props.loadTodos();
				}
			})
			.catch(e => {
				console.log(e);
			});
	};

	const handleClick = () => {
		fetch(`http://localhost:3000/todos/${props.id}`, {
			method: 'DELETE'
		})
			.then(res => {
				if (res.status === 200) {
					props.loadTodos();
				}
			})
			.catch(e => {
				console.log(e);
			});
	};

	const onClickShowInput = () => {
		setIsShowInput(true);
	};

	const onChangeInput = (event) => {
		setNewTitle(event.target.value);
	};

	const onCLickSaveTitle = () => {
		fetch(`http://localhost:3000/todos/${props.id}`, {
			method: 'PUT',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				title: newTitle,
				checked: props.checked
			})
		})
			.then(res => {
				if (res.status === 200) {
					props.loadTodos();
				}
			})
			.then(() => {
				setIsShowInput(false);
			})
			.catch(e => {
				console.log(e);
			});
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
