import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/common/button/button';
import { ROUTES } from '../routes';

export const Menu = ({ navigation }) => (
  <View>
    <Button
      backgroundVaraint="primary"
      title="Nowa wycena"
      onPress={() => navigation.navigate(ROUTES.ESTIMATE_EDIT)}
    />
    <Button
      backgroundVaraint="primary"
      title="Historia wycen"
      onPress={() => navigation.navigate(ROUTES.ESTIMATES)}
    />
    <Button
      backgroundVaraint="primary"
      title="Cenniki"
      onPress={() => navigation.navigate(ROUTES.TARIFFS)}
    />
  </View>
);
