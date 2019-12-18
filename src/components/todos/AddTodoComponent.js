import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddTodoComponent extends React.Component {
	constructor(props) {
		super(props);
		// описываем поля локального хранилища
		// titleValue хранит текст, который ввел пользователь
		// isError нужна для отображения ошибки (проверка на пустой титл)
		this.state = {
			titleValue: '',
			isError: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	// функция, которая обрабаотывает изменение инпута (TextField)
	handleChange(event) {
		// отменям стандартное поведение функции события
		event.preventDefault();
		this.setState({
			titleValue: event.target.value,
			isError: false
		});
	}

	// функция обработки события подтверждения формы
	handleSubmit(event) {
		event.preventDefault();

		//Если титл не пустой
		if (this.state.titleValue) {
			// то вызываем функцию из пропсов
			// при помощи которой добавляем элемент
			fetch('http://localhost:3000/todos', {
				method: 'POST',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({
					title: this.state.titleValue,
					checked: false
				})
			})
				.then(res => {
					console.log(res);
					if (res.status === 200) {
						this.props.loadTodos();
					}
				})
				.catch(e => {
					console.log(e);
				});

			this.setState({
				titleValue: ''
			});
		} else {
			// если титл пустой
			// говорим состоянию, что ошибуля
			this.setState({
				isError: true
			});
		}
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
						           error={this.state.isError} // применяем значение ошибки
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
