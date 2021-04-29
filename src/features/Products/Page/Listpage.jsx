import { Box, Container, Grid, makeStyles, Pagination, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import productApi from '../../../api/productsApi';
import Filters from '../Components/Filters';
import ProductList from '../Components/ProductList';
import ProductListskeletion from '../Components/ProductListskeletion';
import ProductSort from '../Components/ProductSort';

const useStyles = makeStyles((theme) => ({
    root: { backgroundColor: 'rgb(244, 244, 244)' },
    left: {
        width: '250px',
    },
    right: {
        flex: '1 1 0',
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
}));
function Listpage() {
    const classes = useStyles();
    const [productList, setProductList] = useState([]);
    const [loading, setloading] = useState(true);
    const [pagination, setpagination] = useState({
        page: 1,
        limit: 9,
        total: 10,
    });
    const [filters, setfilters] = useState({
        _page: 1,
        _limit: 9,
        _sort: 'salePrice:ASC',
    });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setpagination(pagination);
                console.log({ data, pagination });
            } catch (error) {
                console.log('Fail error', error);
            }
            setloading(false);
        })();
    }, [filters]);
    const handleChange = (e, page) => {
        setfilters((prevfilter) => ({
            ...prevfilter,
            _page: page,
        }));
    };
    const handleSortChange = (newValue) => {
        setfilters((prevfilter) => ({
            ...prevfilter,
            _sort: newValue,
        }));
    };
    const handleFilterChange = (newFilters) => {
        setfilters((prevfilter) => ({
            ...prevfilter,
            ...newFilters,
        }));
    };
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container spacing={1}>
                    <Grid className={classes.left} item>
                        <Paper elevation={1}>
                            <Filters filters={filters} onChange={handleFilterChange} />
                        </Paper>
                    </Grid>
                    <Grid className={classes.right} item>
                        <Paper elevation={0}>
                            <ProductSort value={filters._sort} onChange={handleSortChange} />
                            {loading ? <ProductListskeletion length={9} /> : <ProductList data={productList.data} />}
                            <Box className={classes.pagination}>
                                <Pagination
                                    onChange={handleChange}
                                    color="primary"
                                    count={Math.ceil(pagination.total.data / pagination.limit)}
                                    page={pagination.page}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Listpage;
