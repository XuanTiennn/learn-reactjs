import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { Paper } from '@material-ui/core';
Infor.propTypes = {
    product: PropTypes.object,
};

function Infor({ product = {} }) {
    let clean = DOMPurify.sanitize(product.description);
    return (
        <Paper pd='10px'>
            <div dangerouslySetInnerHTML={{ __html: clean }}></div>;
        </Paper>
    );
}

export default Infor;
