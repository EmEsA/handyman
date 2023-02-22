import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { ItemDropdown } from '../../components/common/item-dropdown/item-dropdown';
import { useTariffs } from '../../hooks/use-tariffs';
import { useCategories } from '../../hooks/use-categories';
import { ItemList } from '../../components/common/item-list/item-list';
import { useServices } from '../../hooks/use-services';
import { StandardHeader } from '../../components/common/item-list/components/header';
import { ROUTES } from '../routes';

const ServicesHeader = () => <StandardHeader columns={['Dostępne usługi']} />;

const ServiceSelection = ({ item }) => <Text>{item.name}</Text>;

const nullItem = { id: undefined };

export const EstimateDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const [selectedTariff, setSelectedTariff] = useState(nullItem);
  const [selectedCategory, setSelectedCategory] = useState(nullItem);

  const filters = useMemo(
    () => ({
      tariffId: selectedTariff.id,
    }),
    [selectedTariff.id]
  );

  return (
    <View>
      <ItemDropdown
        clearOnFocus={true}
        label="Cennik"
        onSelect={(tariff) => {
          setSelectedTariff(tariff);
          setSelectedCategory(nullItem);
        }}
        searchField="name"
        serviceHook={useTariffs}
      />
      <ItemDropdown
        clearOnFocus={true}
        filters={filters}
        label="Kategoria"
        onSelect={(category) => {
          setSelectedCategory(category);
        }}
        searchField="name"
        serviceHook={useCategories}
      />
      <ItemList
        serviceHook={useServices}
        query={{ categoryId: selectedCategory.id }}
        headerComponent={ServicesHeader}
        itemComponent={ServiceSelection}
        onEdit={() => {}}
      />
    </View>
  );
};

EstimateDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
