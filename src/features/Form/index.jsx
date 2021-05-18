import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '../../components/inputField';

Form.propTypes = {};

function Form(props) {
    const form = useForm({
        defaultValues: {
            title: ' ',
        },
    });
    const handleSubmit = (value) => {
        console.log(value);
    };

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField lable="todo" name="title" form={form} />
        </form>
    );
}

export default Form;
