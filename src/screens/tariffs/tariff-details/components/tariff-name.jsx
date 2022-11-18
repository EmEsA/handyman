import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { useTariffs } from '../../../../hooks/use-tariffs';
import { Field } from '../../../../components/service-form/components/field';

export const TariffName = ({ id }) => {
  const { getItems, updateItem } = useTariffs();
  const [name, setName] = useState();

  const handleUpdate = () => {
    updateItem({ id, name });
  };

  useEffect(() => {
    getItems({ id }, (_, resultSet) => {
      const {
        rows: {
          _array: [tariff],
        },
      } = resultSet;
      setName(tariff.name);
    });
  }, []);

  return (
    <Field
      label="Nazwa"
      value={name}
      onChangeText={setName}
      onBlur={handleUpdate}
    />
  );
};

TariffName.propTypes = {
  id: PropTypes.number,
};
