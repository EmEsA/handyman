import React from 'react';
import { View } from 'react-native';

import { Button } from '../../../components/button/button';
import { StandardHeader } from '../../../components/item-list/components/header';
import { ItemList } from '../../../components/item-list/item-list';
import { useTariffs } from '../../../hooks/use-tariffs';
import { ROUTES } from '../../routes';
import { TariffItem } from './components/tariff-item';

const TariffsHeader = () => <StandardHeader columns={['Nazwa', 'Usuń']} />;

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
      <ItemList
        serviceHook={useTariffs}
        onEdit={(tariff) => {
          navigation.navigate(ROUTES.TARIFF_DETAILS, { id: tariff.id });
        }}
        itemComponent={TariffItem}
        headerComponent={TariffsHeader}
      />
    </View>
  );
};
