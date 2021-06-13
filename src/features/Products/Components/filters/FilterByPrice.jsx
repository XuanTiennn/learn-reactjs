import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: { },
    range: {
        display:'flex',
        flexFlow:'row nowrap',
        alignItems:'center',
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
            <div className={classes.range}>
                <input style={{maxHeight:'35px',padding:'10px',maxWidth:'100px',borderRadius:'5px',border:'1px solid ',outline:'none'}}  name="salePrice_gte" value={values.salePrice_gte} onChange={handleChange} />
                <span> - </span>
                <input style={{maxHeight:'35px',padding:'10px',maxWidth:'100px',borderRadius:'5px',border:'1px solid ',outline:'none'}} name="salePrice_lte" value={values.salePrice_lte} onChange={handleChange} />
            </div>

            <Button style={{marginTop:'15px',fontSize:'14px'}} variant="outlined" color="primary" onClick={handleSubmit}>
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;
