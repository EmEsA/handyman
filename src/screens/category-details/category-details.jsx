import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { ROUTES } from '../routes';
import { Button } from '../../components/common/button/button';
import { ServicesList } from '../../components/services/services-list/services-list';
import { EditableItemName } from '../../components/common/editable-item-name/editable-item-name';
import { useCategories } from '../../hooks/use-categories';

export const CategoryDetails = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View>
      <EditableItemName id={id} itemsHook={useCategories} />
      <Button
        backgroundVaraint="primary"
        title="Dodaj usługę"
        onPress={() =>
          navigation.navigate(ROUTES.NEW_SERVICE, { categoryId: id })
        }
      />
      <ServicesList categoryId={id} />
    </View>
  );
};

CategoryDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
