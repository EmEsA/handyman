export const initializeDbSchema = async (db) => {
  await db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS  tariffs (
        id   INTEGER PRIMARY KEY,
        name TEXT    NOT NULL
      );`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS  categories (
        id        INTEGER PRIMARY KEY,
        name      TEXT    NOT NULL,
        tariffId INTEGER NOT NULL,
        CONSTRAINT fk_tariffs
          FOREIGN KEY (tariffId)
          REFERENCES tariffs (id)
          ON DELETE CASCADE
      );`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS  services (
        id          INTEGER PRIMARY KEY,
        name        TEXT    NOT NULL,
        price       NUMERIC NOT NULL,
        unit       TEXT    NULL,
        categoryId INTEGER NOT NULL,
        CONSTRAINT fk_categories
          FOREIGN KEY (categoryId)
          REFERENCES categories (id)
      );`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS  estimates (
        id           INTEGER PRIMARY KEY,
        date         TEXT    NOT NULL,
        phoneNumber NUMERIC NULL,
        address      TEXT NULL,
        closed       BOOLEAN NULL
      );`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      CREATE TABLE IF NOT EXISTS  jobs (
        id           INTEGER PRIMARY KEY,
        units        INTEGER NULL,
        price        REAL    NULL,
        estimateId  NOT NULL,
        serviceId   NOT NULL,
        FOREIGN KEY (estimateId)
          REFERENCES estimates (id),
        FOREIGN KEY (serviceId)
          REFERENCES services (id)
        );`
    );
  });
};

export const insertTestData = async (db) => {
  await db.transaction((tx) => {
    tx.executeSql(
      `
    -- add tariffs
    INSERT INTO tariffs (name)
    VALUES ("kuchnia"),
      ("ogrod"),
      ("obsluga");`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      -- add categories
      INSERT INTO categories (name, tariffId)
      VALUES ("meble", 1),
        ("agd", 1),
        ("elektryka", 1),
        ("altany", 2),
        ("roboty ziemne", 2);`
    );
  });

  await db.transaction((tx) => {
    tx.executeSql(
      `
      -- add services
      INSERT INTO services (name, price, unit, categoryId)
      VALUES ("docinanie blatu", 30, "bok", 1),
        ("wieszanie szafek", 20, NULL, 1),
        ("podłązcenie kuchenki gazowej", 100, NULL, 2),
        ("montaz okapu", 50, NULL, 2),
        ("gniazdgka", 10, "szt", 3),
        ("projekt alatany", 1000, NULL, 4),
        ("montaz alatany", 3000, NULL, 4),
        ("sklaniak", 300, NULL, 5),
        ("przesadzenie drzewka", 100, "szt", 5);`
    );
  });
};

export const clearDB = async (db) => {
  await db.transaction((tx) => {
    tx.executeSql(
      `
      DROP TABLE IF EXISTS jobs;
    `
    );
  });
  await db.transaction((tx) => {
    tx.executeSql(
      `
      DROP TABLE IF EXISTS estimates;
    `
    );
  });
  await db.transaction((tx) => {
    tx.executeSql(
      `
      DROP TABLE IF EXISTS services;
    `
    );
  });
  await db.transaction((tx) => {
    tx.executeSql(
      `
      DROP TABLE IF EXISTS categories;
    `
    );
  });
  await db.transaction((tx) => {
    tx.executeSql(
      `
      DROP TABLE IF EXISTS tariffs;
    `
    );
  });
};

export const query = (db, queryString) => {
  db.transaction((tx) => {
    tx.executeSql(
      queryString,
      null,
      (_, resultSet) => {
        console.log('QUERY SUCCESS', resultSet);
      },
      (_, resultSet) => {
        console.log('QUERY ERROR', resultSet);
      }
    );
  });
};
