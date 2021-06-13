import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { DEFAULT_THUMBNAIL, STATIC_HOST } from '../../Products/constants';

ItemSearch.propTypes = {
    data: PropTypes.array,
};

function ItemSearch({ data = [] }) {
    return (
        <div>
           
                <Grid padding={1}>
                    <Box padding={1}>
                        <img
                            src={data.thumbnail ? `${STATIC_HOST}${data.thumbnail?.url}` : DEFAULT_THUMBNAIL}
                            alt={data.name}
                            width="100%"
                        />
                        <Typography variant="body2"> {data.name}</Typography>
                        <Typography variant="body2">
                            <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND',
                                }).format(data.salePrice)}
                            </Box>
                            {data.promotionPercent > 0 ? `${data.promotionPercent}%` : ' '}
                        </Typography>
                    </Box>
                </Grid>
          
        </div>
    );
}

export default ItemSearch;
