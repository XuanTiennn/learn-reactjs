import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
    tab: {
        '&>span': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '14px',
            },
        },
    },
}));
function ProductSort({ value, onChange }) {
    const handleChange = (e, newvalue) => {
        if (onChange) onChange(newvalue);
    };
    const classes = useStyles();
    return (
        <div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                className={classes.tab}
            >
                <Tab value="salePrice:ASC" label="Giá từ thấp đến cao" />
                <Tab value="salePrice:DESC" label="Giá từ cao đến thấp" />
            </Tabs>
        </div>
    );
}

export default ProductSort;
