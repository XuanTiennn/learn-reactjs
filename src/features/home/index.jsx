import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import ProductSearch from './Pages/ProductSearch';

Home.propTypes = {
    
};

function Home(props) {
    const match=useRouteMatch();
    return (
        <div>
            <Route path={match.url} component={ProductSearch}></Route>
        </div>
    );
}

export default Home;