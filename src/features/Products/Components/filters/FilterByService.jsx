import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, makeStyles, Typography } from '@material-ui/core';

FilterService.propTypes = {
    Filters: PropTypes.object,
    onChange: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: 0,
        '&>li': {
            margin: 0,
        },
    },
    list: {
        listStyle: 'none',
        fontSize: '14px',
    },
}));
function FilterService({ Filters = {}, onChange }) {
    const handleOnchange = (e) => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({ [name]: checked });
    };
    const classes = useStyles();
    return (
        <Box>
            <Typography variant="subtitle2">Lựa chọn</Typography>
            <ul className={classes.root}>
                {[
                    { value: 'isPromotion', label: 'Giảm giá' },
                    { value: 'isFreeShip', label: 'Miễn phí vận chuyển' },
                ].map((service) => (
                    <li className={classes.list} key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name={service.value}
                                    label={service.label}
                                    onChange={handleOnchange}
                                    checked={Filters[service.value]}
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterService;
