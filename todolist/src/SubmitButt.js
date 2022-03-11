function SubmittButt (){
	return(
		 <button onClick={event => {
		 event.preventDefault();
		 console.log("ula");}}> Añadir </button>

	);


}

export default SubmittButt;
