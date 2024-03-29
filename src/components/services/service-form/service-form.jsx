import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { isPositive } from '../../../helpers/validation';
import { Button } from '../../common/button/button';
import { Field } from '../../common/field/field';
import { FullView } from '../../common/full-view/full-view.styled';

export const ServiceForm = ({ buttonText, service = {}, onSubmit }) => {
  const [name, seteName] = useState(service.name);
  const [unit, setUnit] = useState(service.unit);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = () => {
    onSubmit({ id: service.id, name, price, unit });
  };

  return (
    <FullView>
      <Field label="Nazwa" value={name} onChangeText={seteName} />
      <Field
        label="Cena"
        keyboardType="numeric"
        value={price && String(price)}
        onChangeText={setPrice}
      />
      <Field label="Jednostka" value={unit} onChangeText={setUnit} />
      <Button
        backgroundVaraint="primary"
        disabled={!isPositive(price)}
        title={buttonText}
        onPress={handleSubmit}
      />
    </FullView>
  );
};

ServiceForm.propTypes = {
  buttonText: PropTypes.string,
  service: PropTypes.object,
  onSubmit: PropTypes.func,
};
