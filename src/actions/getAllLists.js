import db from '../db'

export default function getAllLists() {
  return db.any('SELECT * FROM lists')
}
