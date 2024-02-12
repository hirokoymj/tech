import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
//Table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import { PaymentForm } from "./PaymentForm";
import { AddressForm } from "./AddressForm";
//import { SelectBox } from "./SelectBox";
import { SelectBox } from "./SelectBox";
import { ButtonPosition } from "./ButtonPosition";

const useStyles = makeStyles(theme => ({
  root: {
		flexGrow: 1,
    width: '100%',
    overflowX: 'auto',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
	lightColor: {
		backgroundColor: theme.palette.primary.light
	},
	paper:{
		padding: theme.spacing(2)
	},
	footer: {
		backgroundColor: 'pink'
	},
  table: {
    minWidth: 650,
  },	
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const AppTest3 = () => {
	const classes = useStyles();

  return (
		<Fragment>
			<CssBaseline />
				<AppBar position="sticky" color="primary">
					<Toolbar >
						<IconButton edge="start" color="secondary" aria-label="menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Album layout
						</Typography>
						<Button color="inherit">Login</Button>
					</Toolbar>
				</AppBar>				
			<main>
				{/* Form Test */}
				<Container maxWidth="md">
					<Paper className={classes.paper}>
						<Checkboxes />
						<RadioButtons />
						<PaymentForm />
						<AddressForm />
						<SelectBox />
						<ButtonPosition />



							<Table className={classes.table} aria-label="simple table">
							<TableHead>
								<TableRow>
									<TableCell>Dessert (100g serving)</TableCell>
									<TableCell align="right">Calories</TableCell>
									<TableCell align="right">Fat&nbsp;(g)</TableCell>
									<TableCell align="right">Carbs&nbsp;(g)</TableCell>
									<TableCell align="right">Protein&nbsp;(g)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map(row => (
									<TableRow key={row.name}>
										<TableCell component="th" scope="row">
											{row.name}
										</TableCell>
										<TableCell align="right">{row.calories}</TableCell>
										<TableCell align="right">{row.fat}</TableCell>
										<TableCell align="right">{row.carbs}</TableCell>
										<TableCell align="right">{row.protein}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>		
					</Paper>
				</Container>				

			</main>
			<footer className={classes.footer}>
				<Typography variant="h6" /*component="h6"*/ align="center" gutterBottom>
					Footer
				</Typography>
				<Typography variant="body1" component="p" align="center" color="textSecondary" gutterBottom>
				Something here to give the footer a purpose!
				</Typography>				
				<Typography variant="caption" component="p" align="center" color="textPrimary" gutterBottom>
					Copyright © Your Website 2019.
				</Typography>				
			</footer>
		</Fragment>
  );
}

export default AppTest3;



