import React, { useState } from 'react';
import { View } from 'react-native';

import { isPositive } from '../../helpers/validation';
import { Button } from '../button/button';
import { Field } from './components/field';

export const ServiceForm = ({ buttonText, service = {}, onSubmit }) => {
  const [name, seteName] = useState(service.name);
  const [description, seteDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = () => {
    onSubmit({ id: service.id, name, description, price });
  };

  return (
    <View>
      <Field label="Nazwa" value={name} onChangeText={seteName} />
      <Field
        label="Opis"
        multiline
        value={description}
        onChangeText={seteDescription}
      />
      <Field
        label="Cena"
        keyboardType="numeric"
        value={price && String(price)}
        onChangeText={setPrice}
      />
      <Button
        backgroundVaraint="primary"
        disabled={!isPositive(price)}
        title={buttonText}
        onPress={handleSubmit}
      />
    </View>
  );
};
