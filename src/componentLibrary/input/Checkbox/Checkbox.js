import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { Label } from '../../text';

const CheckboxWrapper = styled.label`
  /* Negate legacy styles */
  && {
    padding-left: 0px;
    margin-bottom: 0px;
  }
`;

const StyledInput = styled.input.attrs({ type: 'checkbox' })`
  /* Negate legacy styles */
  && {
    margin: 0;
  }
`;

const Checkbox = ({
  id,
  indeterminate,
  label,
  wrapperProps,
  ...props
}) => (
  <CheckboxWrapper {...wrapperProps} htmlFor={id}>
    <StyledInput
      {...props}
      id={id}
      ref={(el) => {
        if (el) {
          el.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
        }
      }}
    />
    {label && <Label as="span" ml={2}>{label}</Label>}
  </CheckboxWrapper>
);

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  indeterminate: PropTypes.bool,
  label: PropTypes.string,
  wrapperProps: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Checkbox.defaultProps = {
  indeterminate: false,
  label: '',
  wrapperProps: {},
};

export default Checkbox;
