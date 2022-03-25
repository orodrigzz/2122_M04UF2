import Button from '@mui/material/Button';
import DeleteIcon from '@mui/material/Delete';

function RemoveTask (props)
{
	return(
		<Button startIcon={<DeleteIcon />} variant="contained" onClick={function (event) {
			props.removeTask(props.id_task);
			}
		}> Borrar </Button>
	);

}

export default RemoveTask;
