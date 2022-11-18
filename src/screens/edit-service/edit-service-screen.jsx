import React from 'react';
import PropTypes from 'prop-types';

import { ServiceForm } from '../../components/service-form/service-form';
import { useServices } from '../../hooks/use-services';

export const EditServiceScreen = ({ route, navigation }) => {
  const { updateService } = useServices();
  const { service } = route.params;

  const handleSave = ({ id, name, price, unit }) => {
    updateService({ id, name, price, unit });
    navigation.pop();
  };

  return (
    <ServiceForm onSubmit={handleSave} buttonText="Zapisz" service={service} />
  );
};

EditServiceScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ service: PropTypes.object }),
  }),
};
