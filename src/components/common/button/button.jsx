import React from 'react';
import PropTypes from 'prop-types';

import { CenteredText, StyledButton } from './button.styled';

export const Button = ({
  title,
  backgroundVaraint,
  textVariant,
  disabled,
  size,
  ...props
}) => (
  <StyledButton
    backgroundVaraint={backgroundVaraint}
    isDisabled={disabled}
    disabled={disabled}
    size={size}
    {...props}
  >
    <CenteredText size={size} textVariant={textVariant}>
      {title}
    </CenteredText>
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.node,
  backgroundVaraint: PropTypes.string,
  textVariant: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.string,
};

Button.defaultProps = {
  title: '',
  backgroundVaraint: undefined,
  textVariant: undefined,
  disabled: false,
  size: undefined,
};
