import { AppBar, Typography, Toolbar, Link, Grid } from '@material-ui/core/';
import SimpleCart from '../cart/simpleCart';

function Header() {
	return (
		<AppBar position="relative" color="white">
			<Toolbar>
				<Grid container direction="row" justify="space-between" alignItems="center">
					<Typography variant="h5" color="inherit" noWrap>
						<Link color="inherit" href="/">
							OUR STORE
						</Link>
					</Typography>
					<SimpleCart />
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
