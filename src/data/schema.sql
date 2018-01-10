-- DROP TABLE IF EXISTS users CASCADE;
-- DROP TABLE IF EXISTS lists CASCADE;
-- DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE users (
  id SERIAL primary key,
  name text NOT NULL,
  email text NOT NULL,
  password text NOT NULL
);

CREATE TABLE lists (
  id SERIAL primary key,
  title VARCHAR(255) NOT NULL,
  user_id integer REFERENCES users(id)
);

CREATE TABLE tasks (
  id SERIAL primary key,
  task text NOT NULL,
  completed boolean NOT NUll default false,
  list_id integer REFERENCES lists(id)
);

CREATE TABLE tasks_in_list (
  list_id integer REFERENCES lists(id),
  task_id integer REFERENCES tasks(id)
);
