import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { NavLink, Link } from 'react-router-dom';
import Register from '../../auth/registerForm/register';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        margin:theme.spacing(0,2),
        
    },
}));
export default function Header() {
    const classes = useStyles();
  
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
                        XuanTien
                    </Typography>
                    <Link className={classes.link} to="/login" color="inherit">
                        Login
                    </Link>
                    <Link className={classes.link} to="/login" color="inherit">
                        Menu
                    </Link>
                    <Link className={classes.link} to="/login" color="inherit" component={Register}>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
