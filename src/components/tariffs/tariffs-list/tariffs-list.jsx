import { NavigationContext } from '@react-navigation/native';
import React, { useContext } from 'react';

import { useTariffs } from '../../../hooks/use-tariffs';
import { ROUTES } from '../../../screens/routes';
import { StandardHeader } from '../../common/item-list/components/header';
import { ItemList } from '../../common/item-list/item-list';
import { TariffItem } from './components/tariff-item';

const TariffsHeader = () => <StandardHeader columns={['Nazwa', 'Usuń']} />;

export const TariffsList = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ItemList
      serviceHook={useTariffs}
      onEdit={(tariff) => {
        navigation.navigate(ROUTES.TARIFF_DETAILS, { id: tariff.id });
      }}
      itemComponent={TariffItem}
      headerComponent={TariffsHeader}
    />
  );
};
