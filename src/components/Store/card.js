/* eslint-disable no-undef */
import { connect } from 'react-redux';
import { increment, show, decrement } from '../../store/actions';

import { Button, Box, Typography, Drawer, List, ListItem, Grid, Divider, makeStyles } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({
    list: {
        width: 300,
    }
});

const Card = (props)=>{
    const classes = useStyles();

    let display = props.card.display || [];

return (
    <>
        <Button color='inherit' onClick={()=>{ props.show(!props.card.show)}}>
            <Box display="flex" width={130} height={50} borderRadius={7} bgcolor='primary' alignItems='center' justifyContent='center' justify='center'>
            <AddShoppingCartIcon />
                <Typography variant='h6' gutterBottom mx={3}> card {props.card.count} </Typography>
            </Box>
        </Button>
        <Drawer anchor='right' open={props.card.show} onClick={()=>{props.show(false)}} >
            <List className={classes.list}>
                <ListItem>
                    <Grid container alignItems='center' justify='center' wrap='wrap' spacing={2} >
                        <Typography variant='h4'> Card </Typography>
                    </Grid>
                </ListItem>
                <Divider />
                {display.map((product)=>{
                    return (
                        <ListItem key={product.id} >
                            <Grid container alignItems='center' justify='space-between' wrap='wrap' spacing={0}>
                                <Typography variant='h7'>
                                    <strong> {product.name} </strong> &nbsp; &nbsp; &nbsp; <strong> {product.count + 1} </strong>
                                </Typography>
                                <HighlightOffIcon onClick={()=>{props.decrement(product)}} />
                            </Grid>
                        </ListItem>
                    )
                })};
                <Divider />
            </List>
        </Drawer>
    </>
    )
};

const mapStateToProps = (state)=> ({card: state.card});

const mapDispatchToProps = { increment, show, decrement};

export default connect(mapStateToProps, mapDispatchToProps)(Card);