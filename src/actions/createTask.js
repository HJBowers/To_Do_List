import db from '../db'

export default function createTask(task, list_id) {
  db.none(`
    INSERT INTO
      tasks (task, list_id)
    VALUES
      ($1, $2)
  `, [task, list_id])

  db.any(`
    SELECT
      *
    FROM
      tasks
    WHERE
      list_id=$1
  `, [list_id])
}
