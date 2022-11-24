import React from 'react';
import PropTypes from 'prop-types';

import { ServiceForm } from '../../components/services/service-form/service-form';
import { useServices } from '../../hooks/use-services';

export const NewService = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const { addItem: addService } = useServices();

  const handleSave = ({ name, price, unit }) => {
    addService({ categoryId, name, price, unit });
    navigation.pop();
  };

  return <ServiceForm onSubmit={handleSave} buttonText="Dodaj usługę" />;
};

NewService.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ categoryId: PropTypes.number }),
  }),
};
