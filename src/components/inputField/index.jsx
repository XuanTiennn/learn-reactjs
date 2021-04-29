import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    lable: PropTypes.string,
};

function InputField(props) {
    const { form, name, disabled, label } = props;
    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({ field }) => (
                    <TextField {...field}>
                        <InputField />
                    </TextField>
                )}
            />
        </div>
    );
}

export default InputField;
