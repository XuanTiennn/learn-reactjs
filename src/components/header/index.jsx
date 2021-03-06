import { Badge, Card, MenuItem } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Register from '../../auth/registerForm/register';
import { hideCartItem } from '../../features/cart/cartSlice';
import { countQuantity, valueCart } from '../../features/cart/createSelector';
import ShowCart from '../../features/Products/Components/ShowCart';
import SearchComponent from './searchComponent';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: '50px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            wordSpacing: 'no-wrap',
        },
    },
    link: {
        color: 'white',
        margin: theme.spacing(0, 2),
        '&:hover': {
            color: 'whitesmoke',
            textDecoration:'none',
            transition:'.3s',
        },
    },
    search: {
        [theme.breakpoints.down('sm')]: {
            display:'none'
        },
    },
}));
export default function Header() {
    const classes = useStyles();
    const cartItemCount = useSelector(countQuantity);
    const history = useHistory();
    const dispatch = useDispatch();
    const toCart = () => {
        history.push('/cart');
        dispatch(hideCartItem(false));
    };
    const value = useSelector(valueCart);
    //console.log(value);
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    ></IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Shop Cart
                    </Typography>
                    <div className={classes.search}>
                        <SearchComponent />
                    </div>

                    <Link className={classes.link} to="/register" color="inherit" component={Register}></Link>
                    <Link to="/products" className={classes.link}>
                        Products
                    </Link>
                    <MenuItem>
                        <IconButton onClick={toCart} aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={cartItemCount > 0 ? cartItemCount : 0} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                            <Card>{value ? <ShowCart /> : ''}</Card>
                        </IconButton>
                    </MenuItem>
                </Toolbar>
            </AppBar>
        </div>
    );
}
