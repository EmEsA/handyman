import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export const EstimateDetails = ({ route, navigation }) => {
  const { id } = route.params;

  return <View></View>;
};

EstimateDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
