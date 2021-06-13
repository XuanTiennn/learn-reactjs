import { makeStyles } from '@material-ui/core';
import { useCallback } from 'react';
import { React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { serachContext } from '../../contextSearch/searchContex';
SearchComponent.propTypes = {};
const useStyles = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '300px',
    },
}));
function SearchComponent(props) {
    const classes = useStyles();
    let valueChange;

    const [value, setValue] = useState('');
    const history = useHistory();
    const { getkey } = useContext(serachContext);
    const getValue = (e) => {
        valueChange = e.target.value;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/');
        getkey(valueChange);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={getValue} placeholder='nhập loại sản phẩm muốn tìm' />
        </form>
    );
}

export default SearchComponent;
