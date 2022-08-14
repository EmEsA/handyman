import React from 'react';

import { ServiceForm } from '../../components/service-form/service-form';
import { useServices } from '../../hooks/use-services';

export const EditServiceScreen = ({ route, navigation, forceUpdate }) => {
  const { updateService } = useServices(forceUpdate);
  const { service } = route.params;

  const handleSave = ({ id, name, description, price }) => {
    updateService({ id, name, description, price });
    navigation.pop();
  };

  return (
    <ServiceForm onSubmit={handleSave} buttonText="Zapisz" service={service} />
  );
};
