import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

import { Item } from '../../common/item-list/components/item.styled';
import { CategoryName } from './category-name.styled';
import { DeleteButton } from '../../common/item-list/components/delete-button';

export const CategoryItem = ({ item, onEdit, onDelete }) => (
  <TouchableOpacity onPress={() => onEdit(item)}>
    <Item>
      <CategoryName>{item.name}</CategoryName>
      <DeleteButton onDelete={() => onDelete(item.id)} />
    </Item>
  </TouchableOpacity>
);

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
