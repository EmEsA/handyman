import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';

import { Field } from '../field/field';
import { Container } from './container.styled';
import { SuggestionsList } from './components/suggestions-list';

export const ItemDropdown = ({
  clearOnFocus,
  filters,
  label,
  onSelect,
  searchField,
  serviceHook,
}) => {
  const [search, setSearch] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const query = {
    ...filters,
    [searchField]: search,
    like: searchField,
  };

  const { items, getItems } = serviceHook(query);

  const handleSelect = (item) => {
    setSearch(item[searchField]);
    setShowSuggestions(false);
    Keyboard.dismiss();
    onSelect(item);
  };

  useEffect(() => {
    if (setShowSuggestions) {
      getItems(query);
    }
  }, [search, setShowSuggestions]);

  useEffect(() => {
    setSearch('');
    getItems(query);
  }, [filters]);

  return (
    <Container>
      <Field
        label={label}
        value={search}
        onFocus={() => {
          if (clearOnFocus) {
            setSearch('');
          }
          setShowSuggestions(true);
        }}
        onChangeText={(text) => {
          setSearch(text);
        }}
        onBlur={() => {
          Keyboard.dismiss();
          setShowSuggestions(false);
        }}
      />
      {showSuggestions && (
        <SuggestionsList
          items={items}
          displayField="name"
          onSelect={handleSelect}
        />
      )}
    </Container>
  );
};

ItemDropdown.propTypes = {
  clearOnFocus: PropTypes.bool,
  filters: PropTypes.object,
  label: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  searchField: PropTypes.string.isRequired,
  serviceHook: PropTypes.func.isRequired,
};

ItemDropdown.defaultProps = {
  clearOnFocus: false,
  filters: {},
};
