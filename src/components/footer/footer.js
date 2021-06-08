import { Typography, Link, makeStyles } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
	footer: {
		color: '#FFFFFFB3',
		backgroundColor: '#424242',
		padding: theme.spacing(5),
	},
}));
function Footer() {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography variant="h6" color="inherit" align="center" gutterBottom>
				Buy Our Stuff!
			</Typography>
			<Typography variant="body2" color="inherit" align="center">
				{'Copyright © '}
				<Link color="inherit" href="https://github.com/s2mackinley">
					Elijah Prom
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</footer>
	);
}

export default Footer;
