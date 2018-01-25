import db from '../db'

export default function createList(title, user_id) {
  return db.none(`
    INSERT INTO
      lists (title, user_id)
    VALUES
      ($1, $2)
  `, [title, user_id])
}
