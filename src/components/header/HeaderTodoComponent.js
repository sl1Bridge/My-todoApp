import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";


// КОМПОНЕНТ ОТВЕЧАЮЩИЙ ЗА ХИДЕР
function HeaderTodoComponent() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container
				      classes={{
				      	root: 'headerContainer'
				      }}
				>
					<Grid item
					      container
					      xs={4}
					      justify="flex-start"
					      alignItems="center"
					>
						<Typography variant="h1" gutterBottom>
							<b>ToDo</b>
						</Typography>
					</Grid>
					<Grid item
					      container
					      xs={4}
					      justify="center"
					>
						<Avatar alt="avatar"
						        className="avatar"
						        src="https://sun9-12.userapi.com/c849124/v849124707/1d5cb0/S0PHbmtZZrM.jpg?ava=1"
						/>
					</Grid>
					<Grid item
					      container
					      xs={4}
					      justify="flex-end"
					      alignItems="flex-end"
					>
						<Typography variant="h4">
							<i>by Ilya</i>
						</Typography>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default HeaderTodoComponent;
