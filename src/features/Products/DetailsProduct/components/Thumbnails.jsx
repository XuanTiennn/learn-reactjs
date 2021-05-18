import React from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_THUMBNAIL, STATIC_HOST } from '../../constants';
import { Box } from '@material-ui/core';

Thumbnails.propTypes = {
    product:PropTypes.object,
};

function Thumbnails({product={}}) {
    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : DEFAULT_THUMBNAIL;
    return (
        <Box padding={1}>
            <Box padding={1}>
                <img src={thumbnailUrl} alt={product.name} width="100%" />
            </Box>
        </Box>
    );
}

export default Thumbnails;