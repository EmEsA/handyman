import React from 'react';
import PropTypes from 'prop-types';

import { getColumnStyle } from '../item-list/components/helpers';
import {
  ViewHeader,
  HeaderField,
  TouchableOpacityHeader,
} from './header.styled';

export const StandardHeader = ({ columns }) => (
  <ViewHeader>
    {columns.map((column, i) => (
      <HeaderField key={column} style={getColumnStyle(columns.length, i)}>
        {column}
      </HeaderField>
    ))}
  </ViewHeader>
);

StandardHeader.propTypes = {
  columns: PropTypes.array,
  onPress: PropTypes.func,
};

export const TouchableHeader = ({ columns, onPress }) => (
  <TouchableOpacityHeader onPress={onPress}>
    {columns.map((column, i) => (
      <HeaderField key={column} style={getColumnStyle(columns.length, i)}>
        {column}
      </HeaderField>
    ))}
  </TouchableOpacityHeader>
);

TouchableHeader.propTypes = {
  columns: PropTypes.array,
  onPress: PropTypes.func,
};

TouchableHeader.defaultProps = {
  onPress: undefined,
};
