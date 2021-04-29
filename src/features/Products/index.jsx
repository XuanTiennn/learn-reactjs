import { Box } from '@material-ui/core';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Listpage from './Page/Listpage';

function Products() {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={Listpage} exact />
            </Switch>
        </Box>
    );
}

export default Products;
