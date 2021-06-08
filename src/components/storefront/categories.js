import { connect } from 'react-redux';
import { active } from '../../store/categories';
import { Button, Grid } from '@material-ui/core';

const activeCategories = (props) => {
	return (
		<div>
			<Grid container spacing={1} justify="center">
				{props.activeList.categories.map((category) => {
					return (
						<Grid item key={category.name}>
							<Button variant="outlined" color="default" onClick={() => props.active(category.name)}>
								{category.display_name}
							</Button>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};

const mapStateToProps = (state) => ({
	activeList: state.categories,
});

const mapDispatchToProps = { active };

export default connect(mapStateToProps, mapDispatchToProps)(activeCategories);
