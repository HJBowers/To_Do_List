import db from "../db"

export default function signin (email, password) {
  return db.oneOrNone(`
    SELECT
      *
    FROM
      users
    WHERE
      (email=$1)
  `, [email])
  .then(user => {
    if(user.password === password) {
      return {user, message: "success"}
    } else {
      return {message: "fail"}
    }
  })
}
