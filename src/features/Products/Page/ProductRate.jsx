import { Box, Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexflow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        '&>li': {
            listStyle: 'none',
            padding: theme.spacing(1, 2),
            '&>a.active': {
                color: 'red',
            },
        },

        '&>a': {
            color: theme.palette.black,
        },
    },
}));
function ProductMenu() {
    const { url } = useRouteMatch();
    //console.log({ url });
    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
            <li>
                <Link to={url} component={NavLink} exact>
                    Infor
                </Link>
            </li>
            <li>
                <Link to={`${url}/reviews`} component={NavLink} exact>
                    Reviews
                </Link>
            </li>
            <li>
                <Link to={`${url}/abc`} component={NavLink} exact>
                    Abc
                </Link>
            </li>
        </Box>
    );
}

export default ProductMenu;
