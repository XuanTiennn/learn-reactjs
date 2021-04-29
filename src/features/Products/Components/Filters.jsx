import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './filters/FilterByCategory';
import FilterByPrice from './filters/FilterByPrice';
import FilterService from './filters/FilterService';

Filters.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func,
};

function Filters({ filters, onChange }) {
    const handleChange = (newcategory) => {
        const newFilters = {
            ...filters,
            'category.id': newcategory,
        };
        onChange(newFilters);
    };
    const handlePriceChange = (values) => {
        if(onChange) onChange(values);
    };
    return (
        <div>
            <FilterByCategory onChange={handleChange} />
            <FilterByPrice onChange={handlePriceChange} />
            <FilterService onChange={handlePriceChange} Filters={filters} />
        </div>
    );
}

export default Filters;
