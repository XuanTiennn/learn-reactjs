import { Box, Container, Grid, makeStyles, Pagination, Paper } from '@material-ui/core';
import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import productApi from '../../../api/productsApi';
import Filters from '../Components/Filters';
import FilterChip from '../Components/filters/FilterChip';
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

    const history = useHistory();
    const location = useLocation();
    const queryParams = queryString.parse(location.search);

    const [pagination, setpagination] = useState({
        page: 1,
        limit: 9,
        total: 10,
    });
    const [filters, setfilters] = useState(() => ({
        ...queryParams,
        _page: Number.parseInt(queryParams._page) || 1,
        _limit: Number.parseInt(queryParams._limit) || 9,
        _sort: queryParams._sort || 'salePrice:ASC',
    }));

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setpagination(pagination);
                //console.log({ data, pagination });
            } catch (error) {
                console.log('Fail error', error);
            }
            setloading(false);
        })();
    }, [filters]);
    useEffect(
        () =>
            history.push({
                pathname: history.location.pathname,
                search: queryString.stringify(filters),
            }),
        [filters, history]
    );
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
    const setNewFilter = (newFilter) => {
        setfilters(newFilter);
    };
    if(loading){
        return <ProductListskeletion/>
    }
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
                            <FilterChip propsfilter={filters} onChange={setNewFilter} />
                            {loading ? <ProductListskeletion  /> : <ProductList data={productList.data} />}
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
