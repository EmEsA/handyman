import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { TariffName } from './components/tariff-name';
import { CategoriesList } from './components/categories-list/categories-list';

export const TariffDetails = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View>
      <TariffName id={id} />
      <CategoriesList tariffId={id} />
    </View>
  );
};

TariffDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
