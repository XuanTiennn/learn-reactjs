import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
export const serachContext = React.createContext();
const SearchProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);
    const [start, setStart] = useState(1);
    const history = useHistory();
   // console.log(history);
    const getkey = (key) => {
        setValue(key);
    };
    const getStart = (key) => {
        setStart(key);
    };
    useEffect(() => {
        if (value) {
            axios
                .get(`https://api.ezfrontend.com/products?_limit=9&_start=${start}&category.searchTerm=${value}`)
                .then((res) => setData(res));
            axios
                .get(`https://api.ezfrontend.com/products/count?category.searchTerm=${value}`)
                .then((res) => setCount(res));
        }
    }, [value, start]);
    useEffect(() => {
        history.push({
            pathname: history.location.pathname,
            search: queryString.stringify(value),
        });
    }, [value, start]);
    const getdata = {
        data,
        count,
        start,
        getkey,
        getStart,
    };
    return <serachContext.Provider value={getdata}>{children}</serachContext.Provider>;
};

export default SearchProvider;
