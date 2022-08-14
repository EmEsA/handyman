import React from 'react';

export const DbContext = React.createContext({
  db: null,
  dbChanged: {},
  markDbChanged: () => {},
});
