import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Typography } from '@material-ui/core';
import { DEFAULT_THUMBNAIL, STATIC_HOST } from '../constants';
import { useHistory } from 'react-router-dom';

Product.propTypes = {
    product: PropTypes.object,
};
Product.defaultProps = {
    product: [],
};
function Product({ product }) {
    const history = useHistory();

    const thumbnailUrl = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : DEFAULT_THUMBNAIL;
    const redictor = () => {
        history.push(`products/${product.id}`);
    };

    return (
        <Grid padding={1}>
            <Box padding={1} onClick={redictor}>
                <img src={thumbnailUrl} alt={product.name} width="100%" />
                <Typography variant="body2"> {product.name}</Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(
                            product.salePrice
                        )}
                    </Box>
                    {product.promotionPercent > 0 ? `${product.promotionPercent}%` : ' '}
                </Typography>
            </Box>
        </Grid>
    );
}

export default Product;
