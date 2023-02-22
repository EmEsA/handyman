import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Label } from './label.styled';
import { Input } from './input.styled';

export const Field = ({
  label,
  placeholder,
  value,
  onChangeText,
  onBlur,
  onFocus,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      {label && <Label focused={focused}>{label}</Label>}
      <Input
        {...props}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => {
          setFocused(true);
          onFocus();
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur(e);
        }}
        focused={focused}
        placeholder={placeholder}
      />
    </>
  );
};

Field.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
};

Field.defaultProps = {
  onBlur: () => {},
};
