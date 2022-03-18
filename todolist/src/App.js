import React from 'react';
import './App.css';
import Title from './Title';
import Form from './Form';
import List from './List';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state ={

		};
	}

	handleSubmit = event => {
		console.log(event.target.value);

	}
		render(){
	  return (
    	<div className="App">
    	<Title />
		<Form handleSubmit={this.handleSubmit}/>
		<List />
		</div>
 	 );
	}
}

export default App;
