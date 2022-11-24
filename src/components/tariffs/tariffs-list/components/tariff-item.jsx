import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Item } from '../../../common/item-list/components/item.styled';
import { TariffName } from './tariff-name.styled';
import { DeleteButton } from '../../../common/item-list/components/delete-button';

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
