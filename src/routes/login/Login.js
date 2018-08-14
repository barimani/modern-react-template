import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from "components/formComponents/TextField";

/** Synchronous validation: checks for email existence and password with minimum 8 characters */
const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 8) {
        errors.password = 'Password must be at least 8 characters';
    }
    return errors;
};

@reduxForm({form: 'login', validate})
export class Login extends React.Component {

    static propTypes = {handleSubmit: PropTypes.func};

    onSubmit = () => {

    };

    render() {

        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
                <Field
                    name="username"
                    component={TextField}
                    type="text"
                    label="Username"/>
                <Field
                    name="password"
                    component={TextField}
                    type="password"
                    label="Password"/>
            </form>
        );
    }
}
