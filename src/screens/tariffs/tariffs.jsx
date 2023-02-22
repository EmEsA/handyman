import React from 'react';

import { Button } from '../../components/common/button/button';
import { FullView } from '../../components/common/full-view/full-view.styled';
import { TariffsList } from '../../components/tariffs/tariffs-list/tariffs-list';
import { useTariffs } from '../../hooks/use-tariffs';
import { ROUTES } from '../routes';

export const Tariffs = ({ navigation }) => {
  const { addItem: addTariff } = useTariffs();

  return (
    <FullView>
      <Button
        backgroundVaraint="primary"
        title="Dodaj cennik"
        onPress={() => {
          addTariff({ name: 'Nowy cennik' }, (_, { insertId }) => {
            navigation.navigate(ROUTES.TARIFF_DETAILS, { id: insertId });
          });
        }}
      />
      <TariffsList />
    </FullView>
  );
};
