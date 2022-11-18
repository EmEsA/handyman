import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { DeleteButton } from '../../../../components/item-list/components/delete-button';
import { Item } from '../../../../components/item-list/components/item.styled';
import { TariffName } from './tariff-name.styled';

export const TariffItem = ({ item, onEdit, onDelete }) => (
  <TouchableOpacity onPress={() => onEdit(item)}>
    <Item>
      <TariffName>{item.name}</TariffName>
      <DeleteButton onDelete={() => onDelete(item.id)} />
    </Item>
  </TouchableOpacity>
);

TariffItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
