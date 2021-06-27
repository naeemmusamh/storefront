import { connect } from 'react-redux';
import { Button, Grid, Typography } from '@material-ui/core/';
import { active } from '../../store/categories.js';

const activeCategories = (props) => {
    return (
      <div>
        <Typography component="p"
        variant="h5"
        align="left"
        color="textSecondary">
          Browse Our Categories
        </Typography>
        <Grid container spacing={2}>
          {props.activeList.categories.map((category) => {
            return (
              <Grid item key={category.name}>
                <Button
                  variant="outlined"
                  color="default"
                  onClick={() => props.active(category.name)}
                >
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