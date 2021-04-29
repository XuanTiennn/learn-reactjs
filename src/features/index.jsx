import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import TodoAlbum from './todo/components/Todolist';
import DetailsPage from './todo/pages/DetailsPage';
import ListPage from './todo/pages/ListPages';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route path={match.path} component={ListPage} exact />
            <Route path={`${match.path}/:todoId`} component={DetailsPage} />
        </Switch>
    );
}

export default TodoFeature;
