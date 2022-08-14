import React from 'react';

import { View } from 'react-native';
import { Button } from '../../components/button/button';

export const MenuScreen = ({ navigation }) => (
  <View>
    <Button
      backgroundVaraint="primary"
      title="Lista usług"
      onPress={() => navigation.navigate('/services')}
    />
  </View>
);
