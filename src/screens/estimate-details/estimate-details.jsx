import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { ItemDropdown } from '../../components/common/item-dropdown/item-dropdown';
import { useTariffs } from '../../hooks/use-tariffs';
import { useCategories } from '../../hooks/use-categories';
import { ItemList } from '../../components/common/item-list/item-list';
import { useServices } from '../../hooks/use-services';
import { TouchableHeader } from '../../components/common/header/header';
import { ServiceSelection } from './components/service-selection';
import { FullView } from '../../components/common/full-view/full-view.styled';

const AVAILABLE = 'available';
const SELECTED = 'selected';

const nullItem = { id: undefined };

export const EstimateDetails = ({ route }) => {
  const { id } = route.params;
  const [selectedTariff, setSelectedTariff] = useState(nullItem);
  const [selectedCategory, setSelectedCategory] = useState(nullItem);
  const [maximized, setMaximized] = useState();

  const filters = useMemo(
    () => ({
      tariffId: selectedTariff.id,
    }),
    [selectedTariff.id]
  );

  const maximize = (section) => {
    switch (section) {
      case AVAILABLE:
        setMaximized(maximized === AVAILABLE ? undefined : AVAILABLE);
        break;
      case SELECTED:
        setMaximized(maximized === SELECTED ? undefined : SELECTED);
        break;
      default:
    }
  };

  const AvaialbleServicesHeader = () => (
    <TouchableHeader
      columns={['Dostępne usługi']}
      onPress={() => maximize(AVAILABLE)}
    />
  );
  const SelectedServicesHeader = () => (
    <TouchableHeader
      columns={['Wybrane usługi']}
      onPress={() => maximize(SELECTED)}
    />
  );

  return (
    <FullView>
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
      <FullView style={{ flex: 1, display: 'flex' }}>
        <FullView style={{ flexGrow: maximized === AVAILABLE ? 5 : 1 }}>
          <ItemList
            serviceHook={useServices}
            query={{ categoryId: selectedCategory.id }}
            headerComponent={AvaialbleServicesHeader}
            itemComponent={ServiceSelection}
            onEdit={() => {}}
          />
        </FullView>
        <FullView style={{ flexGrow: maximized === SELECTED ? 5 : 1 }}>
          <ItemList
            serviceHook={useServices}
            query={{ categoryId: selectedCategory.id }}
            headerComponent={SelectedServicesHeader}
            itemComponent={ServiceSelection}
            onEdit={() => {}}
          />
        </FullView>
      </FullView>
    </FullView>
  );
};

EstimateDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
