import db from '../db'

export default function createList(title, user_id) {
  return db.one(`
    INSERT INTO
      lists (title, user_id)
    VALUES
      ($1, $2)
    RETURNING
      *
  `, [title, user_id])
}
