import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './container.styled';
import { Suggestion } from './suggestion';

export const SuggestionsList = ({ items, displayField, onSelect }) => {
  if (!items.length) {
    items.push({ id: 'noResults', [displayField]: 'No results' });
  }

  return (
    <Container>
      {items.map((item, index) => (
        <Suggestion
          key={item.id}
          first={index === 0}
          display={item[displayField]}
          onSelect={() => {
            if (item.id !== 'noResults') {
              onSelect(item);
            }
          }}
        />
      ))}
    </Container>
  );
};

SuggestionsList.propTypes = {
  items: PropTypes.array,
  displayField: PropTypes.string,
  onSelect: PropTypes.func,
};
