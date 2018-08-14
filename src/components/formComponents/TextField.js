import React from 'react';
import {TextField as MaterialTextField} from '@material-ui/core';
import PropTypes from 'prop-types';

/**
 *  Custom TextField configured for redux-form. Sample usage is {@link Login}
 */
const TextField =  props => {
  const {input, label, placeholder, disabled, type, meta: { touched, error } = {}, className} = props;
  return (
    <div className={className}>
      <MaterialTextField
        {...input}
        label={label}
        type={type}
        disabled={!!disabled}
        fullWidth
        placeholder={placeholder}
        margin="normal"
        helperText={touched && error}
        error={touched && !!error} />
    </div>
  );
};

TextField.propTypes = {
    className: PropTypes.string, input: PropTypes.object, label: PropTypes.string,
    placeholder: PropTypes.string, type: PropTypes.string, disabled: PropTypes.bool,
    meta: PropTypes.object
};

export default TextField;

