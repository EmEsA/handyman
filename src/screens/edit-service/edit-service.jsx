import React from 'react';
import PropTypes from 'prop-types';

import { useServices } from '../../hooks/use-services';
import { ServiceForm } from '../../components/services/service-form/service-form';

export const EditService = ({ route, navigation }) => {
  const { updateItem: updateService } = useServices();
  const { service } = route.params;

  const handleSave = ({ id, name, price, unit }) => {
    updateService({ id, name, price, unit });
    navigation.pop();
  };

  return (
    <ServiceForm onSubmit={handleSave} buttonText="Zapisz" service={service} />
  );
};

EditService.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ service: PropTypes.object }),
  }),
};
