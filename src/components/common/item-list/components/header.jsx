import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styled } from '../../../../stitches';
import { getColumnStyle } from './helpers';

export const StyledHeader = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
});

export const HeaderField = styled(Text, { fontWeight: 'bold' });

export const StandardHeader = ({ columns }) => (
  <StyledHeader>
    {columns.map((column, i) => (
      <HeaderField key={column} style={getColumnStyle(columns.length, i)}>
        {column}
      </HeaderField>
    ))}
  </StyledHeader>
);

StandardHeader.propTypes = {
  columns: PropTypes.array,
};
