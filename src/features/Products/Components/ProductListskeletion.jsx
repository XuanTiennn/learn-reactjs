import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Paper, Skeleton } from '@material-ui/core';
ProductListskeletion.propTypes = {
    length: PropTypes.number,
};

function ProductListskeletion({ length = 9 }) {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <Container>
            <Grid container spacing={1}>
                <Grid lg={3} item>
                    <Paper elevation={1}>
                        <Skeleton style={{ padding: '10px' }} />
                        <Skeleton style={{ padding: '10px' }} />
                        <Skeleton style={{ padding: '10px' }} />
                        <Skeleton style={{ padding: '10px' }} />
                        <Skeleton style={{ padding: '10px' }} />
                    </Paper>
                </Grid>
                <Grid lg={9} item>
                    <Paper elevation={0}>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />

                        <Grid container>
                            {array.map((item) => (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <Box padding={1}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductListskeletion;
