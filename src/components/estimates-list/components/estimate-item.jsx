import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Item } from '../../common/item-list/components/item.styled';
import { DeleteButton } from '../../common/item-list/components/delete-button';
import { EstimateAddress, EstimateDate } from './estimate.styled';

export const EstimateItem = ({ item, onEdit, onDelete }) => (
  <TouchableOpacity onPress={() => onEdit(item)}>
    <Item>
      <EstimateDate>{item.date}</EstimateDate>
      <EstimateAddress>{item.address}</EstimateAddress>
      <DeleteButton onDelete={() => onDelete(item.id)} />
    </Item>
  </TouchableOpacity>
);

EstimateItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
