import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { styled } from 'stitches-native';

export const StyledHeader = styled(View, {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
});

export const HeaderField = styled(Text, { fontWeight: 'bold' });

const getStyle = (totalColumns, columnNumber) => {
  switch (columnNumber) {
    case 0:
      return { flexGrow: 1 };
    case totalColumns - 1:
      return { flexBasis: 50, textAlign: 'right' };
    default:
      return undefined;
  }
};

export const StandardHeader = ({ columns }) => (
  <StyledHeader>
    {columns.map((column, i) => (
      <HeaderField key={column} style={getStyle(columns.length, i)}>
        {column}
      </HeaderField>
    ))}
  </StyledHeader>
);

StandardHeader.propTypes = {
  columns: PropTypes.array,
};
