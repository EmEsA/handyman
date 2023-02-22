import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import { styled } from '../../../../stitches';

const Container = styled(View, {
  fontWeight: 'bold',
  borderTopWidth: 1,
  borderColor: '$colors$dividerColor',
  padding: 10,

  variants: {
    first: {
      true: {
        borderTopWidth: 0,
      },
    },
  },
});

export const Suggestion = ({ display, onSelect, ...props }) => (
  <Container {...props}>
    <TouchableOpacity onPress={onSelect}>
      <Text>{display}</Text>
    </TouchableOpacity>
  </Container>
);
