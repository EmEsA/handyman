import { TextInput } from 'react-native';

import { styled } from '../../../stitches';

export const Input = styled(TextInput, {
  borderBottomWidth: 1,
  marginBottom: 10,

  variants: {
    focused: {
      true: {
        color: '$colors$primaryColor',
        borderBottomColor: '$colors$primaryColor',
      },
    },
  },
});
