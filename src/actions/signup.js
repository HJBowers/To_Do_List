import db from "../db"

export default function signup (name, email, password) {
  return db.oneOrNone(`
    INSERT INTO
      users(name, email, password)
    VALUES
      ($1, $2, $3)
  `, [name, email, password])
}
