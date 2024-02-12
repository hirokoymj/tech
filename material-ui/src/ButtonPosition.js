import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
	buttons: {
		display: "flex",
		justifyContent: "flex-end",
		margin: theme.spacing(3, 0)
	},
	button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
	},
	bottomButton:{
		display: "flex",
		justifyContent: "space-between",
		margin: theme.spacing(3, 0)
	},
	buttonGroup:{
		display: "flex",
		justifyContent: "flex-start",		
		margin: theme.spacing(3, 0)
	},
	buttonGroup2:{
		display: "flex",
		margin: theme.spacing(3, 0)
	},
	prevButton: {
		marginLeft: "auto"
	},
	controllerButtons:{
		display: "flex",
		margin: theme.spacing(3, 0),
		flexDirection: "row",
		justifyContent: "space-evenly"
	}
}));


export const ButtonPosition = () =>{
	const classes = useStyles();

	return (
		<Fragment>
			<div className={classes.buttons}>
				<Button className={classes.button}>
					Back
				</Button>
				<Button variant="contained" color="primary" className={classes.button}>
					Next
				</Button>		
			</div>
			<Divider />
			<div className={classes.bottomButton}>
				<Button>
					Back
				</Button>
				<Button variant="contained" color="primary">
					Next
				</Button>		
			</div>
			<Divider />
			<div className={classes.buttonGroup}>
				<Button>
					Back
				</Button>
				<Button variant="contained" color="primary">
					Next
				</Button>		
			</div>
			<Divider />
			<div className={classes.buttonGroup2}>
				<Button>
				Back
				</Button>
				<Button variant="contained" color="primary">
				Next
				</Button>		
				<Button variant="contained" color="primary" className={classes.prevButton}>
				Prev
				</Button>		
			</div>
			<Divider />
			<div className={classes.controllerButtons}>
				<Button variant="contained" color="primary">Prev</Button>			
				<Button variant="contained" color="primary">Play</Button>			
				<Button variant="contained" color="primary">Next</Button>			
			</div>
		</Fragment>
	)
}