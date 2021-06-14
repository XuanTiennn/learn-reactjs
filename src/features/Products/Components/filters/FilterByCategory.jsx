import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import categoryApi from '../../../../api/categoryApi';
import { Box, makeStyles, Typography, Skeleton } from '@material-ui/core';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    list: {
        paddingLeft: theme.spacing(2),
    },
    item: {
        listStyle: 'none',
        padding: theme.spacing(0.5, 0),
        cursor: 'pointer',
        margin: theme.spacing(0),
        fontSize: '16px',
    },
}));

function FilterByCategory({ onChange }) {
    const [categories, setcategories] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        (async () => {
            try {
                const { data } = await categoryApi.getAll();
                setcategories(
                    data.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                );
                //console.log(categories);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    const handleCateforyClick = (category) => {
        if (onChange) onChange(category.id);
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">Danh Mục Sản Phẩm</Typography>
            <ul className={classes.list}>
                {categories.map((category) => (
                    <li onClick={() => handleCateforyClick(category)} className={classes.item} key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
