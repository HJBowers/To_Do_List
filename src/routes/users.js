import express from 'express'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.render('users/profile', {user: req.session.user})
})

export default router
