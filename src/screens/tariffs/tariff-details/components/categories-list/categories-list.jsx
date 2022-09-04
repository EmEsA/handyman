import React from 'react';
import PropTypes from 'prop-types';

import { ItemList } from '../../../../../components/item-list/item-list';
import { useCategories } from '../../../../../hooks/use-categories';
import { CategoryItem } from './category-item';
import { StandardHeader } from '../../../../../components/item-list/components/header';

const CategoriesHeader = () => <StandardHeader columns={['Nazwa', 'Usuń']} />;

export const CategoriesList = ({ tariffId }) => {
  return (
    <ItemList
      serviceHook={useCategories}
      query={{ tariffId }}
      itemComponent={CategoryItem}
      headerComponent={CategoriesHeader}
      onEdit={() => {}}
    />
  );
};

CategoriesList.propTypes = {
  tariffId: PropTypes.number,
};
