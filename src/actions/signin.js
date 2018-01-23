import db from "../db"

export default function signin (email, password) {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE
      (email=$1, password=$2)
  `[email, password])
}
