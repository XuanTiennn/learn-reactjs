import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ListPageHome from './Pages/ListPages';

Home.propTypes = {
    
};

function Home(props) {
    const match=useRouteMatch();
    return (
        <div>
            <Route path={match.url} component={ListPageHome}></Route>
        </div>
    );
}

export default Home;