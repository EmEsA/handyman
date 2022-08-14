import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Button } from '../../../button/button';

import {
  ServiceName,
  ServicePrice,
  ServiceRow,
  ServiceDelete,
} from './service.styled';

export const Service = ({ service, onEdit, onDelete }) => {
  return (
    <TouchableOpacity onPress={() => onEdit(service)}>
      <ServiceRow key={service.id}>
        <ServiceName>{service.name}</ServiceName>
        <ServicePrice>{service.price}</ServicePrice>
        <ServiceDelete>
          <Button
            title="✖"
            backgroundVaraint="alert"
            size="icon"
            textVariant="light"
            onPress={() => {
              onDelete(service.id);
            }}
            style={{ alignSelf: 'flex-end' }}
          />
        </ServiceDelete>
      </ServiceRow>
    </TouchableOpacity>
  );
};
