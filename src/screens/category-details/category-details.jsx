import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../routes';
import { Button } from '../../components/common/button/button';
import { ServicesList } from '../../components/services/services-list/services-list';
import { EditableItemName } from '../../components/common/editable-item-name/editable-item-name';
import { useCategories } from '../../hooks/use-categories';
import { FullView } from '../../components/common/full-view/full-view.styled';

export const CategoryDetails = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <FullView>
      <EditableItemName id={id} itemsHook={useCategories} />
      <Button
        backgroundVaraint="primary"
        title="Dodaj usługę"
        onPress={() =>
          navigation.navigate(ROUTES.NEW_SERVICE, { categoryId: id })
        }
      />
      <ServicesList categoryId={id} />
    </FullView>
  );
};

CategoryDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
