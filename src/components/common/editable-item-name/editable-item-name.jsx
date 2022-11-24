import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Field } from '../field/field';

export const EditableItemName = ({ id, itemsHook }) => {
  const { getItems, updateItem } = itemsHook({ id });
  const [name, setName] = useState();

  const handleUpdate = () => {
    updateItem({ id, name });
  };

  useEffect(() => {
    getItems({ id }, (_, resultSet) => {
      const {
        rows: {
          _array: [item],
        },
      } = resultSet;
      setName(item.name);
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

EditableItemName.propTypes = {
  id: PropTypes.number,
  itemsHook: PropTypes.func,
};
