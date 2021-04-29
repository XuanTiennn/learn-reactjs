import React, { useState } from 'react';
import PropTypes from 'prop-types';

ChangeNumber.propTypes = {
    
};

function ChangeNumber(props) {
    const [number,setnumber]=useState(0);
    return (
        <div>
            {number}
            <button onClick={()=> setnumber(x=> x+1)}>Click me</button>
        </div>
    );
}

export default ChangeNumber;