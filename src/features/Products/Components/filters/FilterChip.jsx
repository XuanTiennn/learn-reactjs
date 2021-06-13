import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, makeStyles } from '@material-ui/core';

FilterChip.propTypes = {
    propsfilter: PropTypes.object,
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        margin: theme.spacing(1),
        padding: 0,
        '& > li': {
            margin: theme.spacing(1),
            listStyle: 'none',
        },
    },
}));
const FILTER_LIST = [
    {
        id: 1,
        getLable: () => 'Giao hàng miễn phí',
        isActive: (propsfilter) => propsfilter.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (propsfilter) => {
            const newFilter = { ...propsfilter };
            if (newFilter.isFreeShip) {
                delete newFilter.isFreeShip;
            } else {
                newFilter.isFreeShip = true;
            }
            return newFilter;
        },
    },
    {
        id: 2,
        getLable: () => 'Có khuyến mãi',
        isActive: () => true,
        isVisible: (propsfilter) => Object.keys(propsfilter).includes('isPromotion'),
        isRemovable: true,
        onRemove: (propsfilter) => {
            const newfilter = { ...propsfilter };
            delete newfilter.isPromotion;
            return newfilter;
        },
        onToggle: () => {},
    },
    {
        id: 3,
        getLable: (propsfilter) => `từ ${propsfilter.salePrice_gte} đến ${propsfilter.salePrice_lte}`,
        isActive: () => true,
        isVisible: (propsfilter) =>
            Object.keys(propsfilter).includes('salePrice_gte') && Object.keys(propsfilter).includes('salePrice_lte'),
        isRemovable: true,
        onRemove: (propsfilter) => {
            const newfilter = { ...propsfilter };
            delete newfilter.salePrice_gte;
            delete newfilter.salePrice_lte;
            return newfilter;
        },
        onToggle: () => {},
    },
];
function FilterChip({ propsfilter = {}, onChange = null }) {
    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
            {FILTER_LIST.filter((x) => x.isVisible(propsfilter)).map((x) => (
                <li key={x.id}>
                    <Chip
                        label={x.getLable(propsfilter)}
                        color={x.isActive(propsfilter) ? 'primary' : 'default'}
                        clickable={!x.isRemovable}
                        onClick={
                            x.isRemovable
                                ? null
                                : () => {
                                      if (!onChange) return;
                                      const newFilter = x.onToggle(propsfilter);
                                      onChange(newFilter);
                                  }
                        }
                        onDelete={
                            x.isRemovable
                                ? () => {
                                      if (!onChange) return;
                                      const newFilter = x.onRemove(propsfilter);
                                      onChange(newFilter);
                                  }
                                : null
                        }
                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterChip;
