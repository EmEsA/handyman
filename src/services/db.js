import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { isEmpty, join, map, pick, pipe, tap, toPairs } from 'ramda';

import { isPositive } from '../helpers/validation';

export const openDatabase = () => {
  if (Platform.OS === 'web') {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase('db.db');
  return db;
};

export const servicesService = {
  get: (db, query, callback) => {
    const sanitizedQuery = pick(['id', 'name', 'description', 'price'])(query);
    let whereClause = '';
    const values = [];
    if (!isEmpty(sanitizedQuery)) {
      whereClause =
        ' WHERE ' +
        pipe(
          toPairs,
          tap(([, value]) => values.push(value)),
          map(([field]) => `${field} = ?`),
          join(', ')
        )(sanitizedQuery);
    }

    db.transaction((tx) => {
      tx.executeSql('SELECT * FROM services' + whereClause, values, callback);
    }, null);
  },
  add: (db, { name, description, price }, callback) => {
    if (!db || !name || !isPositive(price)) {
      console.log('invalid input');
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql(
          'INSERT INTO services (name, description, price) VALUES (?, ?, ?)',
          [name, description, price]
        );
      },
      null,
      callback
    );
  },
  delete: (db, { id }, callback) => {
    if (!db || !id) {
      return false;
    }

    db.transaction(
      (tx) => {
        tx.executeSql('DELETE FROM services WHERE id = ?', [id]);
      },
      null,
      callback
    );
  },
  update: (db, { id, description, name, price }, callback) => {
    if (!db || !id || (price && !isPositive(price))) {
      console.log('invalid');
      return false;
    }

    const fields = [];
    const values = [];
    if (description) {
      fields.push('description = ?');
      values.push(description);
    }
    if (name) {
      fields.push('name = ?');
      values.push(name);
    }
    if (price) {
      fields.push('price = ?');
      values.push(price);
    }

    db.transaction(
      (tx) => {
        tx.executeSql(
          `
        UPDATE services
        SET ${fields.join(',')}
        WHERE id =${id}`,
          values
        );
      },
      null,
      callback
    );
  },
};
