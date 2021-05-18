import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AddCircleOutlineOutlined, RemoveCircleOutlineOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: { padding: theme.spacing(0, 2) },
    flexbox: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        margin: theme.spacing(2, 0),
    },
    input: {
        width: '50px',
    },
    button: {
        cursor: 'pointer',
        margin: theme.spacing(0, 1),
    },
    addtocart: {
        maxWidth: '200px',
        outline: 'none',
    },
}));
function Quantity({ onSubmit = {} }) {
    const [value, setValue] = useState(1);
    const dispatch=useDispatch();
    
    const handlesubmit = (e) => {
        e.preventDefault();
        if (!onSubmit) return;
        const formm = {
            quantity: value,
        }; 
        onSubmit(formm);
       
    };
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <form >
                <Box className={classes.flexbox}>
                    <RemoveCircleOutlineOutlined
                        className={classes.button}
                        onClick={() => (value < 2 ? 1 : setValue((value) => value - 1))}
                    />
                    <TextField variant="outlined" className={classes.input} value={value} />
                    <AddCircleOutlineOutlined
                        className={classes.button}
                        onClick={() => setValue((value) => value + 1)}
                    />
                </Box>
            </form>
            <Button onClick={handlesubmit} className={classes.addtocart} variant="contained" color="primary">
                Chọn mua
            </Button>
        </Box>
    );
}

export default Quantity;
