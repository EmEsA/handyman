import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Item } from '../../../common/item-list/components/item.styled';
import { DeleteButton } from '../../../common/item-list/components/delete-button';
import { ServiceName, ServicePrice } from './service.styled';

export const ServiceItem = ({ item, onEdit, onDelete }) => (
  <TouchableOpacity onPress={() => onEdit(item)}>
    <Item>
      <ServiceName>{item.name}</ServiceName>
      <ServicePrice>
        {item.price} {item.unit ? ` / ${item.unit}` : ''}
      </ServicePrice>
      <DeleteButton onDelete={() => onDelete(item.id)} />
    </Item>
  </TouchableOpacity>
);

ServiceItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
