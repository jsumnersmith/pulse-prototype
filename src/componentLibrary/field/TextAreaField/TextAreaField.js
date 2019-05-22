import React from 'react';
import PropTypes from 'prop-types';

import TextArea from '../../input/TextArea';
import Fieldset from '../Fieldset';

const TextAreaField = ({
  input: { name, onBlur, onChange, value },
  meta: { error, form, touched },
  label,
  ...props
}) => {
  const hasError = error && touched;
  const id = `${form}-${name}`;

  return (
    <Fieldset
      error={hasError ? error : null}
      label={label}
      labelHtmlFor={id}
    >
      <TextArea
        hasError={hasError}
        id={id}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
    </Fieldset>
  );
};

TextAreaField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string,
  }).isRequired,
  meta: PropTypes.shape({
    error: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string,
    ]),
    form: PropTypes.string,
    touched: PropTypes.bool,
  }).isRequired,
  label: PropTypes.string,
};

TextAreaField.defaultProps = {
  label: '',
};

export default TextAreaField;
