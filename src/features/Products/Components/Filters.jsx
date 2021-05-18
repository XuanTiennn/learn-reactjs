import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './filters/FilterByCategory';
import FilterByPrice from './filters/FilterByPrice';
import FilterService from './filters/FilterByService';
import { Box, makeStyles } from '@material-ui/core';


Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

const useStyle=makeStyles((theme)=>({
root:{
    padding:theme.spacing(2),
}
}))
function Filters({ filters, onChange }) {
    const handleChange = (newcategory) => {
        const newFilters = {
            ...filters,
            'category.id': newcategory,
        };
        onChange(newFilters);
    };
    const handlePriceChange = (values) => {
        if (onChange) onChange(values);
    };
    const classes=useStyle();
    return (
        <Box className={classes.root}>
            <FilterByCategory onChange={handleChange} />
            <FilterByPrice onChange={handlePriceChange} />
            <FilterService onChange={handlePriceChange} Filters={filters} />
         
        </Box>
    );
}

export default Filters;
