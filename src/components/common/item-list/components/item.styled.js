import { View } from 'react-native';

import { styled } from '../../../../stitches';

export const Item = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: '$colors$dividerColor',
});
