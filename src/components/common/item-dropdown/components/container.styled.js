import { View } from 'react-native';

import { styled } from '../../../../stitches';

export const Container = styled(View, {
  position: 'absolute',
  top: 55,
  right: 0,
  left: 0,
  width: 'auto',
  borderWidth: 1,
  borderColor: '$colors$dividerColor',
  backgroundColor: '$colors$menuColor',
  zIndex: 100,
  shadowColor: '$colors$shadowColor',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 10,
});
