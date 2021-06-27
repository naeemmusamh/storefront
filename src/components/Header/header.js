import { connect } from 'react-redux';
import { AppBar, Typography, Toolbar, Link, Grid, Box } from '@material-ui/core/';
import { increment } from '../../store/products.js';

function Header(props) {
    return (
      <AppBar position="relative" color="white">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography variant="h5" color="inherit" noWrap>
              <Link color="inherit" href="/">
                OUR STORE
              </Link>
            </Typography>
            <Box
              display="flex"
              width={120}
              height={50}
              bgcolor="white"
              alignItems="center"
              justifyContent="center"
              justify="center"
              onClick={()=>props.increment()}
            >
              <Typography variant="h6" gutterBottom mx={3}>
                cart ({props.products.count})
              </Typography>
            </Box>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
  
  const mapStateToProps = (state) => ({ products: state.products });
  const mapDispatchToProps = { increment };
  export default connect(mapStateToProps, mapDispatchToProps)(Header)