import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { useServices } from '../../../hooks/use-services';
import { NavigationContext } from '@react-navigation/native';
import { ROUTES } from '../../../screens/routes';
import { StandardHeader } from '../../common/item-list/components/header';
import { ItemList } from '../../common/item-list/item-list';
import { ServiceItem } from './components/service-item';

const ServicesHeader = () => (
  <StandardHeader columns={['Usługa', 'Cena', 'Usuń']} />
);

export const ServicesList = ({ categoryId }) => {
  const navigation = useContext(NavigationContext);

  return (
    <ItemList
      serviceHook={useServices}
      query={{ categoryId }}
      itemComponent={ServiceItem}
      headerComponent={ServicesHeader}
      onEdit={(service) => {
        navigation.navigate(ROUTES.SERVICE_DETAILS, {
          service,
        });
      }}
    />
  );
};

ServicesList.propTypes = {
  categoryId: PropTypes.number,
  onEdit: PropTypes.func,
};
