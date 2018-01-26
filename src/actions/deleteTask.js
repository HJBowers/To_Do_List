import db from '../db'

export default function deleteTask(taskId) {
  return db.one(`
    DELETE FROM
      tasks
    WHERE
      id = $1
    RETURNING
      *
  `, [taskId])
}
