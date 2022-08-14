import React from 'react';

import { ServiceForm } from '../../components/service-form/service-form';
import { useServices } from '../../hooks/use-services';

export const NewServiceScreen = ({ navigation, forceUpdate }) => {
  const { addService } = useServices(forceUpdate);

  const handleSave = ({ name, description, price }) => {
    addService({ name, description, price });
    navigation.pop();
  };

  return <ServiceForm onSubmit={handleSave} buttonText="Dodaj usługę" />;
};
