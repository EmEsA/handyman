import { Text, TouchableOpacity, View } from 'react-native';
import { styled } from 'stitches-native';

const commonHeaderStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
};

export const HeaderField = styled(Text, { fontWeight: 'bold' });

export const ViewHeader = styled(View, commonHeaderStyles);

export const TouchableOpacityHeader = styled(
  TouchableOpacity,
  commonHeaderStyles
);
