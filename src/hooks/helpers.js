import { useContext, useEffect, useState } from 'react';

import { DbContext } from '../contexts/db-context';

export const createServiceHook = (service) => (initialQuery) => {
  const { db, markDbChanged } = useContext(DbContext);
  const [items, setItems] = useState([]);

  const getItems = (
    query = service.defaultQuery,
    callback = () => {},
    errorCallback = () => {}
  ) => {
    const wrappedCallback = (transaction, resultSet) => {
      const {
        rows: { _array },
      } = resultSet;
      setItems(_array);
      callback(transaction, resultSet);
    };
    return service.get(db, query, wrappedCallback, errorCallback);
  };

  const addItem = (
    item = service.defaultQuery,
    callback = () => {},
    errorCallback = () => {}
  ) => {
    const wrappedCallback = (transaction, resultSet) => {
      markDbChanged();
      callback(transaction, resultSet);
    };
    service.add(db, item, wrappedCallback, errorCallback);
  };

  const deleteItem = (query, callback = () => {}, errorCallback = () => {}) => {
    const wrappedCallback = (transaction, resultSet) => {
      markDbChanged();
      callback(transaction, resultSet);
    };
    service.delete(db, query, wrappedCallback, errorCallback);
  };

  const updateItem = (
    query = service.defaultQuery,
    callback = () => {},
    errorCallback = () => {}
  ) => {
    const wrappedCallback = (transaction, resultSet) => {
      markDbChanged();
      callback(transaction, resultSet);
    };
    return service.update(db, query, wrappedCallback, errorCallback);
  };

  useEffect(() => {
    if (initialQuery) {
      getItems(initialQuery);
    }
  }, []);

  return {
    items,
    getItems,
    addItem,
    deleteItem,
    updateItem,
  };
};
