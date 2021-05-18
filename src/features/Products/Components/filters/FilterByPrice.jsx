import React, { useState } from 'react';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: { },
    range: {
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
    },
    button: {
        marginTop: '40px',
    },
}));
function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevalues) => ({
            ...prevalues,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        if (onChange) onChange(values);
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Giá</Typography>
            <Box className={classes.range}>
                <TextField   name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField  name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </Box>

            <Button marginTop="20px" className={classes.button} variant="outlined" color="primary" onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;
