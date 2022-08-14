import { Text, View } from 'react-native';

import { styled } from '../../../../stitches';

export const ServiceRow = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingVertical: 10,
  borderBottomWidth: 1,
  borderBottomColor: '$colors$dividerColor',
});

ServiceRow.displayName = 'ServiceRow';

export const ServiceName = styled(Text, { flexGrow: 1 });

export const ServicePrice = styled(Text, {});

export const ServiceDelete = styled(View, {
  width: 50,
});
