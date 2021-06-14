import { Box, Container, Grid, Pagination, Paper } from '@material-ui/core';
import React, { useContext } from 'react';
import { serachContext } from '../../../contextSearch/searchContex';
import ItemSearch from './ItemSearch';
ProductSearch.propTypes = {};

function ProductSearch() {
    const { data, count, getStart } = useContext(serachContext);
    //console.log(data);
    const handleChange = (e, page) => {
        getStart(page);
    };
    return (
        <Container style={{ marginTop: '50px' }}>
            <Paper>
                <Grid container>
                    {data.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <ItemSearch data={product} />
                        </Grid>
                    ))}
                </Grid>

                <Box className="d-flex justify-content-center" style={{ padding: '30px 0' }}>
                    {count > 0 ? (
                        <Pagination color="primary" onChange={handleChange} count={Math.ceil(count / 9)} />
                    ) : (
                        'Không tìm thấy sản phẩm nào!'
                    )}
                </Box>
            </Paper>
        </Container>
    );
}

export default ProductSearch;
