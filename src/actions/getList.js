import db from '../db'

export default function getList(list_id) {
  return db.one('SELECT * FROM lists WHERE id = $1', [list_id])
}
