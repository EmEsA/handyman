import React from 'react';

import { FullView } from '../../components/common/full-view/full-view.styled';
import { EstimatesList } from '../../components/estimates-list/estimates-list';

export const Estimates = () => {
  return (
    <FullView>
      <EstimatesList />
    </FullView>
  );
};
