import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, Typography } from '@material-ui/core';

FilterService.propTypes = {
    Filters: PropTypes.object,
    onChange: PropTypes.func,
};

function FilterService({ Filters = {}, onChange }) {
    const handleOnchange = () => {
        if (!onChange) return;
        const { name, checked } = e.target;
        onChange({ [name]: checked });
    };
    return (
        <Box>
            <Typography>Lựa chọn</Typography>
            <ul>
                {[
                    { value: 'isPromotion', label: 'Giảm giá' },
                    { value: 'isFreeship', label: 'Miễn phí vận chuyển' },
                ].map((service) => {
                    <li>
                        <Checkbox
                            name={service.value}
                            label={service.label}
                            onChange={handleOnchange}
                            checked={Filters[service.value]}
                        />
                        <Checkbox
                            name={service.value}
                            label={service.label}
                            onChange={handleOnchange}
                            checked={Filters[service.value]}
                        />
                    </li>;
                })}
            </ul>
        </Box>
    );
}

export default FilterService;
