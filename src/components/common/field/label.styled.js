import { Text } from 'react-native';

import { styled } from '../../../stitches';

export const Label = styled(Text, {
  variants: {
    focused: {
      true: {
        color: '$colors$primaryColor',
      },
    },
  },
});
