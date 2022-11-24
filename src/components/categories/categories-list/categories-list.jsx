import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavigationContext } from '@react-navigation/native';

import { StandardHeader } from '../../common/item-list/components/header';
import { ItemList } from '../../common/item-list/item-list';
import { useCategories } from '../../../hooks/use-categories';
import { CategoryItem } from './category-item';
import { ROUTES } from '../../../screens/routes';

const CategoriesHeader = () => (
  <StandardHeader columns={['Kategoria', 'Usuń']} />
);

export const CategoriesList = ({ tariffId }) => {
  const navigation = useContext(NavigationContext);

  return (
    <ItemList
      serviceHook={useCategories}
      query={{ tariffId }}
      itemComponent={CategoryItem}
      headerComponent={CategoriesHeader}
      onEdit={(category) => {
        navigation.navigate(ROUTES.CATEGORY_DETAILS, {
          tariffId,
          id: category.id,
        });
      }}
    />
  );
};

CategoriesList.propTypes = {
  tariffId: PropTypes.number,
};
