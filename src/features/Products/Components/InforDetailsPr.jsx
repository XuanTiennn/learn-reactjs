import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles, Typography } from '@material-ui/core';
import format from '../../../utils/comman';
InforDetailsPr.propTypes = {
    product: PropTypes.object,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.grey[400]}`,
    },
    salePrice: {
        marginRight: theme.spacing(1),
        fontSize: theme.typography.h3.fontSize,
    },
    box: {
        backgroundColor: theme.palette.grey[300],
        padding: theme.spacing(2),
    },

    originalPrice: {
        padding: theme.spacing(0,2),
        textDecoration: 'line-through',
        fontSize:theme.typography.h4.fontSize,
        color:theme.palette.grey[600],
    },
    promotionPercent: {
        marginLeft:theme.pad1,
    },
    shortDescription: {
        marginTop: theme.spacing(2),
    },
}));
function InforDetailsPr({ product = {} }) {
    const { name, originalPrice, salePrice, shortDescription, promotionPercent } = product;
    const classes = useStyles();
    return (
        <Box className={classes.root} pd={2}>
            <Typography variant="h4" className={classes.title} component="h1">
                {name}
            </Typography>
            <Box className={classes.box}>
                <Typography className={classes.salePrice} component="span">
                    {format(salePrice)}
                </Typography>
                {promotionPercent > 0 && (
                    <>
                        <Typography className={classes.originalPrice} component="span" >
                            {format(originalPrice)}
                        </Typography>
                        <Typography className={classes.promotionPercent} component="span">
                            {`-${promotionPercent}%`}
                        </Typography>
                    </>
                )}
            </Box>

            <Typography className={classes.shortDescription} component="p">
                {shortDescription}
            </Typography>
        </Box>
    );
}

export default InforDetailsPr;
