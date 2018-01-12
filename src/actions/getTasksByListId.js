import db from '../db'

export default function getTasksByListId(list_id) {
  return db.any('SELECT * FROM tasks WHERE list_id = $1', [list_id])
}
