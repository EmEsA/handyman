import { NavigationContext } from '@react-navigation/native';
import React, { useContext } from 'react';

import { useEstimates } from '../../hooks/use-estimates';
import { ROUTES } from '../../screens/routes';
import { StandardHeader } from '../common/item-list/components/header';
import { ItemList } from '../common/item-list/item-list';
import { EstimateItem } from './components/estimate-item';

const EstimatesHeader = () => (
  <StandardHeader columns={['Data', 'Adres', 'Usuń']} />
);

export const EstimatesList = () => {
  const navigation = useContext(NavigationContext);

  return (
    <ItemList
      serviceHook={useEstimates}
      onEdit={(estimate) => {
        navigation.navigate(ROUTES.ESTIMATE_DETAILS, { id: estimate.id });
      }}
      itemComponent={EstimateItem}
      headerComponent={EstimatesHeader}
    />
  );
};
