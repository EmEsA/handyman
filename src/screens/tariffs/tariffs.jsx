import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/common/button/button';
import { TariffsList } from '../../components/tariffs/tariffs-list/tariffs-list';
import { useTariffs } from '../../hooks/use-tariffs';
import { ROUTES } from '../routes';

export const Tariffs = ({ navigation }) => {
  const { addItem } = useTariffs();

  return (
    <View>
      <Button
        backgroundVaraint="primary"
        title="Dodaj cennik"
        onPress={() => {
          addItem({ name: 'Nowy cennik' }, (_, { insertId }) => {
            navigation.navigate(ROUTES.TARIFF_DETAILS, { id: insertId });
          });
        }}
      />
      <TariffsList />
    </View>
  );
};
