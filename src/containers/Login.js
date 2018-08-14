import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import TextField from "components/formComponents/TextField";
import {connect} from "react-redux";
import {authenticate} from "../actions/auth";
import {Button} from "@material-ui/core";

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

const mapDispatchToProps = {authenticate};

@reduxForm({form: 'login', validate})
@connect(null, mapDispatchToProps)
export default class Login extends React.Component {

    static propTypes = {handleSubmit: PropTypes.func, authenticate: PropTypes.func};

    onSubmit = (values) => {
        return this.props.authenticate(values);
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
                <Button type="submit">Submit</Button>
            </form>
        );
    }
}
