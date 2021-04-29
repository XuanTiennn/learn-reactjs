import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

function ProductSort({ value, onChange }) {
    const handleChange = (e, newvalue) => {
        if (onChange) onChange(newvalue);
    };
    return (
        <div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <Tab value="salePrice:ASC" label="Gia từ thấp đến cao" />
                <Tab value="salePrice:DESC" label="Gia từ cao đến thấp" />
            </Tabs>
        </div>
    );
}

export default ProductSort;
