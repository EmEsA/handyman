import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';
import {
  fromPairs,
  isEmpty,
  join,
  keys,
  map,
  pick,
  pipe,
  tap,
  toPairs,
  values,
} from 'ramda';

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

export const createService = ({
  tableName,
  fields,
  validation = { get: () => true, add: () => true, update: () => true },
}) => ({
  emptyQuery: pipe(
    map((field) => [field, undefined]),
    fromPairs
  )(fields),
  get: (db, query, callback) => {
    if (!db) {
      console.error('db unavailable');
    }
    if (!validation.get(query)) {
      console.error('invalid input');
      return false;
    }

    const sanitizedQuery = pick(fields)(query);
    let whereClause = '';
    const values = [];
    if (!isEmpty(sanitizedQuery)) {
      whereClause =
        ' WHERE ' +
        pipe(
          toPairs,
          tap((pairs) => {
            pairs.forEach(([, value]) => {
              values.push(value);
            });
          }),
          map(([field]) => `${field} = ?`),
          join(', ')
        )(sanitizedQuery);
    }

    return db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM ${tableName}` + whereClause,
        values,
        callback
      );
    }, null);
  },

  add: (db, item, callback, errorCallback) => {
    if (!db) {
      console.error('db unavailable');
    }
    if (!validation.add(item)) {
      console.error('invalid input');
      return false;
    }

    const fieldNames = keys(item);
    const fieldValues = values(item);

    return db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO ${tableName} (${fieldNames}) VALUES (${new Array(
          fieldNames.length
        )
          .fill('?')
          .join(',')})`,
        fieldValues,
        callback,
        errorCallback
      );
    }, null);
  },

  delete: (db, query, callback, errorCallback) => {
    if (!db) {
      console.error('db unavailable');
    }
    const sanitizedQuery = pick(fields)(query);
    let whereClause = '';
    const vals = [];
    whereClause =
      ' WHERE ' +
      pipe(
        toPairs,
        tap((pairs) => {
          pairs.forEach(([, value]) => {
            vals.push(value);
          });
        }),
        map(([field]) => `${field} = ?`),
        join(', ')
      )(sanitizedQuery);

    return db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM ${tableName}` + whereClause,
        vals,
        callback,
        errorCallback
      );
    }, null);
  },

  update: (db, item, callback, errorCallback) => {
    if (!db) {
      console.error('db unavailable');
    }
    if (!item.id) {
      console.error('no item id provided');
      return false;
    }
    if (!validation.update(item)) {
      console.error('invalid input');
      return false;
    }

    const setFields = pipe(
      keys,
      map((field) => `${field} = ?`)
    )(item);

    const vals = values(item);

    return db.transaction((tx) => {
      tx.executeSql(
        `
        UPDATE ${tableName}
        SET ${setFields.join(',')}
        WHERE id =${item.id}`,
        vals,
        callback,
        errorCallback
      );
    }, null);
  },
});
