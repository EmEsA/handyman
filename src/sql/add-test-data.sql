-- add tariffs
INSERT INTO tariffs (name)
VALUES ("kuchnia"),
  ("ogrod");

-- add categories
INSERT INTO categories (name, tariff_id)
VALUES ("meble", 1),
  ("agd", 1),
  ("elektryka", 1),
  ("altany", 2),
  ("roboty ziemne", 2);

-- add services
INSERT INTO services (name, price, unit, category_id)
VALUES ("docinanie blatu", 30, "bok", 1),
  ("wieszanie szafek", 20, NULL, 1),
  ("podłązcenie kuchenki gazowej", 100, NULL, 2),
  ("montaz okapu", 50, NULL, 2),
  ("gniazdgka", 10, "szt", 3),
  ("projekt alatany", 1000, NULL, 4),
  ("montaz alatany", 3000, NULL, 4),
  ("sklaniak", 300, NULL, 5),
  ("przesadzenie drzewka", 100, "szt", 5);
