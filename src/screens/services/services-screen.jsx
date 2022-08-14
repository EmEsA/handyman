import React from 'react';
import { View } from 'react-native';

import { Button } from '../../components/button/button';
import { ServicesList } from '../../components/services-list/services-list';

export const ServicesScreen = ({ navigation }) => {
  const onEdit = (service) =>
    navigation.navigate('/services/edit', { service });

  return (
    <View>
      <Button
        backgroundVaraint="primary"
        title="Dodaj usługę"
        onPress={() => navigation.navigate('/services/new')}
      />
      <ServicesList onEdit={onEdit} />
    </View>
  );
};
