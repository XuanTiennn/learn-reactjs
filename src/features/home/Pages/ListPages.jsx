import React, { useEffect, useState } from 'react';
import productApiHome from '../../../api/productApiHome';
import Banner from '../../../components/banner';


ListPageHome.propTypes = {};

function ListPageHome(props) {
    const [Filter, setFilter] = useState({
        _page: 2,
        _limit: 20,
        //_q:laptop
    });
    useEffect(() => {
        (async () => {
            try {
                const data = await productApiHome.getAll(Filter);
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    
    return <div><Banner/></div>;
}

export default ListPageHome;
