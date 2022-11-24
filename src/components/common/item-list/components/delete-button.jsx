import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../button/button';

export const DeleteButton = ({ onDelete }) => (
  <Button
    title="✖"
    backgroundVaraint="alert"
    size="icon"
    textVariant="light"
    onPress={onDelete}
    style={{ marginLeft: 25 }}
  />
);

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
