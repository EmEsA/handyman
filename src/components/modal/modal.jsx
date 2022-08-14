import { Modal as BaseModal, View } from 'react-native';
import { styled } from '../../stitches';
import { Button } from '../button/button';

const Centered = styled(View, {
  flex: 1,
  justifyContent: 'center',
  alignContent: 'center',
});

const Content = styled(View, {
  backgroundColor: '#FFFFFF',
  padding: 30,
  margin: 30,
  borderRadius: 5,
  shadowColor: '$colors$shadowColor',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 10,
});

const Footer = styled(View, {
  marginTop: 30,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignContent: 'stretch',
});

const FooterButton = styled(Button, {
  marginLeft: 30,
  minWidth: 50,
});

export const Modal = ({
  children,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
  ...props
}) => (
  <BaseModal {...props} transparent={true}>
    <Centered>
      <Content>
        {children}
        <Footer>
          <Button textVariant="alert" title={cancelText} onPress={onCancel} />
          <Button
            backgroundVaraint="primary"
            primary
            title={confirmText}
            onPress={onConfirm}
          />
        </Footer>
      </Content>
    </Centered>
  </BaseModal>
);
