import React, { useState } from 'react';

import { Input } from './input.styled';
import { Label } from './label.styled';

export const Field = ({ label, value, onChangeText, ...props }) => {
  const [focused, setFocused] = useState(false);

  return (
    <>
      <Label focused={focused}>{label}</Label>
      <Input
        {...props}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        focused={focused}
      />
    </>
  );
};
