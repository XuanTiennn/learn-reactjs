import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@material-ui/core';
ProductListskeletion.propTypes = {
    length: PropTypes.number,
};
ProductListskeletion.defaultProps = {
    length: 9,
};
function ProductListskeletion({ length }) {
    return (
        <Box>
            {Array.from(
                new Array(length).map((x, index) => (
                    <Grid container>
                        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                            <Box padding={1}>
                                <Skeleton variant="rect" width="100%" height={200} />
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        </Grid>
                    </Grid>
                ))
            )}
        </Box>
    );
}

export default ProductListskeletion;
