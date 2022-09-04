import React from 'react';

import { ServiceForm } from '../../components/service-form/service-form';
import { useServices } from '../../hooks/use-services';

export const NewServiceScreen = ({ navigation }) => {
  const { addService } = useServices();

  const handleSave = ({ name, price, unit }) => {
    addService({ name, price, unit });
    navigation.pop();
  };

  return <ServiceForm onSubmit={handleSave} buttonText="Dodaj usługę" />;
};
