CREATE TABLE IF NOT EXISTS  tariffs (
  id   INTEGER PRIMARY KEY,
  name TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS  categories (
  id        INTEGER PRIMARY KEY,
  name      TEXT    NOT NULL,
  tariffId INTEGER NOT NULL,
  FOREIGN KEY (tariffId)
    REFERENCES tariffs (id)
);

CREATE TABLE IF NOT EXISTS  services (
  id          INTEGER PRIMARY KEY,
  name        TEXT    NOT NULL,
  price       NUMERIC NOT NULL,
  unit       TEXT    NULL,
  categoryId INTEGER NOT NULL,
  FOREIGN KEY (categoryId)
    REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS  estimates (
  id           INTEGER PRIMARY KEY,
  date         TEXT    NOT NULL,
  phoneNumber NUMERIC NULL,
  address      TEXT NULL,
  closed       BOOLEAN NULL
);

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
);
