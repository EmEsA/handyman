import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/common/button/button';
import { useEstimates } from '../../hooks/use-estimates';
import { ROUTES } from '../routes';

export const Menu = ({ navigation }) => {
  const { addItem: addEstimate } = useEstimates();

  return (
    <View>
      <Button
        backgroundVaraint="primary"
        title="Nowa wycena"
        onPress={() => {
          addEstimate({ date: new Date().toISOString() }, (_, { insertId }) => {
            navigation.navigate(ROUTES.ESTIMATE_DETAILS, { id: insertId });
          });
        }}
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
};
