import React from 'react';
import PropTypes from 'prop-types';

import { CategoriesList } from '../../components/categories/categories-list/categories-list';
import { Button } from '../../components/common/button/button';
import { EditableItemName } from '../../components/common/editable-item-name/editable-item-name';
import { useCategories } from '../../hooks/use-categories';
import { ROUTES } from '../routes';
import { useTariffs } from '../../hooks/use-tariffs';
import { FullView } from '../../components/common/full-view/full-view.styled';

export const TariffDetails = ({ route, navigation }) => {
  const { id } = route.params;
  const { addItem: addCategory } = useCategories();

  return (
    <FullView>
      <EditableItemName id={id} itemsHook={useTariffs} />
      <Button
        backgroundVaraint="primary"
        title="Dodaj kategorię"
        onPress={() => {
          addCategory(
            { name: 'Nowa kategoria', tariffId: id },
            (_, { insertId }) => {
              navigation.navigate(ROUTES.CATEGORY_DETAILS, {
                tariffId: id,
                id: insertId,
              });
            }
          );
        }}
      />
      <CategoriesList tariffId={id} />
    </FullView>
  );
};

TariffDetails.propTypes = {
  route: PropTypes.shape({ params: PropTypes.shape({ id: PropTypes.number }) }),
};
