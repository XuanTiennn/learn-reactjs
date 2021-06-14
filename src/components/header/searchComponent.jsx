import { makeStyles } from '@material-ui/core';
import { useCallback } from 'react';
import { React, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { serachContext } from '../../contextSearch/searchContex';
SearchComponent.propTypes = {};
const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.common.white,
        },
        marginRight: theme.spacing(2),
        outline: 'none',
        border: 'none',
        '&:placehoder': {
            fontSize: '14px',
        },
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
        history.push('/search');
        getkey(valueChange);
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                className={classes.search}
                type="text"
                onChange={getValue}
                placeholder="nhập loại sản phẩm muốn tìm"
            />
        </form>
    );
}

export default SearchComponent;
