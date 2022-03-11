import React from 'react';

import InputTxt from './InputTxt';
import SubmitButt from './SubmitButt';


class Form extends React.Component{
	constructor(props){
		super(props);
	}

	handleSubmit(event){
		event.preventDefault();
		console.log("ª");
	}

	render(){
	return (
		<form onSubmit={this.handleSubmit}>
		<InputTxt />
		<SubmitButt />
		</form>
	);
}

}

export default Form;
