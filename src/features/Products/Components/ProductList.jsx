import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import { Box, Grid, Typography } from '@material-ui/core';

ProductList.propTypes = {
    data: PropTypes.array,
};
ProductList.defaultProps = {
    data: [],
};

function ProductList({ data }) {
    // if (!Array.isArray(data)) return null;
    // function showdata() {
    //     console.log(data);
    // }
    return (
        <Box>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductList;
