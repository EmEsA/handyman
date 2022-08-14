import { Text, TouchableOpacity } from 'react-native';
import { styled } from '../../stitches';

export const StyledButton = styled(TouchableOpacity, {
  paddingVertical: 10,
  paddingHorizontal: 50,
  borderRadius: 5,

  variants: {
    backgroundVaraint: {
      primary: {
        backgroundColor: '$colors$primaryColor',
      },
      alert: {
        backgroundColor: '$colors$alertColor',
      },
    },
    size: {
      icon: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: 25,
        height: 25,
        borderRadius: 100,
      },
    },
    isDisabled: {
      true: {
        backgroundColor: '$colors$disabledColor',
      },
    },
  },
});

export const CenteredText = styled(Text, {
  textAlign: 'center',
  textAlignVertical: 'center',

  variants: {
    textVariant: {
      alert: {
        color: '$colors$alertColor',
      },
      light: {
        color: '$colors$textLight',
      },
    },
    size: {
      icon: {
        textAlignVertical: 'center',
        marginTop: -4,
      },
    },
  },
});
