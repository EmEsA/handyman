import { Text, View } from 'react-native';
import { styled } from 'stitches-native';

export const Header = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  marginBottom: 10,
});

export const HeaderField = styled(Text, { fontWeight: 'bold' });
