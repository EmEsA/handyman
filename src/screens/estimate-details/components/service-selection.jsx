import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

export const ServiceSelection = ({ item }) => <Text>{item.name}</Text>;

ServiceSelection.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
