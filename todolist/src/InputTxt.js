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
		<TextField label ="Tarea"  onChange={this.handleChange} value={this.state.value}/>
		
		);
	}
}

export default InputTxt;
