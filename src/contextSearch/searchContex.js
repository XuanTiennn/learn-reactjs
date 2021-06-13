import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const serachContext = React.createContext();
const SearchProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const [count,setCount]=useState(0);
    const getkey = (key) => {
        setValue(key);
    };
    useEffect(() => {
        if (value) {
            axios.get(`https://api.ezfrontend.com/products?category.searchTerm=${value}`).then((res) => setData(res));
            axios.get(`https://api.ezfrontend.com/products/count?category.searchTerm=${value}`).then((res) => setCount(res));
        }
    }, [value]);
    const getdata = {
        data,
        count,
        getkey,
    };
    return <serachContext.Provider value={getdata}>{children}</serachContext.Provider>;
};

export default SearchProvider;
