import React from 'react';

class InputTxt extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: ""
		};
	}

	handleChange (event){
		console.log(event.target.value);
		this.setState({
			value: event.target.value
		});
	}

	render() {
		return (
		<label htmlFor="task"> Tarea 
		<input type="text" id="task" onChange={this.handleChange}/>
		</label>
		);
	}
}

export default InputTxt;
