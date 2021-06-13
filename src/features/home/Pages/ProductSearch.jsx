import { Box, Container, Grid, Pagination } from '@material-ui/core';
import React, { useContext } from 'react';
import { serachContext } from '../../../contextSearch/searchContex';
import ItemSearch from './ItemSearch';
ProductSearch.propTypes = {};

function ProductSearch() {
    const { data, count } = useContext(serachContext);
    console.log(data);

    return (
        <Container style={{ marginTop: '50px' }}>
            <Grid container>
                {data.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <ItemSearch data={product} />
                    </Grid>
                ))}
            </Grid>
            <Box>
                <Pagination color="primary" c count={Math.ceil(count / 9)} />
            </Box>
        </Container>
    );
}

export default ProductSearch;
