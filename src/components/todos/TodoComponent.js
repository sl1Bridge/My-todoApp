import React from 'react';
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Close from '@material-ui/icons/Close';
import Fab from "@material-ui/core/Fab";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Check from "@material-ui/icons/Check";
import IconButton from '@material-ui/core/IconButton';
import {checkTodo, changeTodoTitle, removeTodo} from "../../api";
import {connect} from "react-redux";
import {changeTitleText, setTitleInputStatus} from "../../store/actions";

function TodoComponent(props) {
	
	const handleChange = event => {
		checkTodo(props, event);
	};

	const handleClick = () => {
		removeTodo(props);
	};

	const onClickShowInput = () => {
		props.setTitleInputStatus(true);
	};

	const onChangeInput = (event) => {
		props.changeTitleText(event.target.value);
	};

	const onCLickSaveTitle = () => {
		changeTodoTitle(props);
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
									disabled={props.showInputStatus}
				/>
			</Grid>
			<Grid item
			      xs={6}
			      container
			      alignItems="center"
			>
				{!props.showInputStatus &&
					<Typography variant="h5"
				            classes={{
				            	root: props.checked ? 'line' : 'defaultText'
				            }}
				            onClick={onClickShowInput}
					>
					{props.title}
				</Typography>}
				{props.showInputStatus &&
					<Input value={props.newTitle}
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
					 disabled={props.showInputStatus}
				>
					<Close />
				</Fab>
			</Grid>
		</Grid>
	);
}

const mapStateToProps = (state) => {
	return {
		newTitle: state.newTitle,
		showInputStatus: state.showInputStatus
	};
};

const mapDispatchToProps = {
	setTitleInputStatus,
	changeTitleText
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent);
