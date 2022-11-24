import React, { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Button } from '../button/button';

export const HomeButon = () => {
  const navigation = useContext(NavigationContext);

  return (
    <Button
      title={<Ionicons name="md-home" size={24} />}
      size="icon"
      onPress={navigation.popToTop}
      style={{
        paddingVertical: 0,
        paddingHorizontal: 0,
        borderRadius: 0,
        marginVertical: 0,
        alignSelf: 'center',
        marginTop: 10,
      }}
    />
  );
};
