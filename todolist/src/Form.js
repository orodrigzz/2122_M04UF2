import React from 'react';

import InputTxt from './InputTxt';
import SubmitButt from './SubmitButt';


class Form extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			task: ""
		};
	}

	handleSubmit = (event)=>{
		event.preventDefault();
		this.props.handleSubmit(this.state.task);
	}

	handleChange = (event) => {
		this.setState({
			task: event.target.value
		});
	}
	render(){
	return (
		<form onSubmit={this.handleSubmit}>
		<InputTxt handleChange={this.handleChange} />
		<SubmitButt />
		</form>
	);
}

}

export default Form;
