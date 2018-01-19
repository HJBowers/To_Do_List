import db from '../db'

export default function createTask(task, list_id) {
  return db.none(`
    INSERT INTO
      tasks (task, list_id)
    VALUES
      ($1, $2)
  `, [task, list_id])
}
