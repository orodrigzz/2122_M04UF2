import React from 'react';

class InputTxt extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			value: props.value
		};
	}

	handleChange = (event) => {
		this.props.handleChange(event);
		this.setState({
			value: event.target.value
		});
	}

	render() {
		let l = this.state.value.length;
		return (
		<label htmlFor="task"> Tarea 
		<input type="text" id="task" onChange={this.handleChange} value={this.state.value}/>
		</label>
		);
	}
}

export default InputTxt;
