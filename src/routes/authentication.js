import express from 'express'

const router = express.Router()

router.get('/signin', (req, res, next) => {
  res.render('authentication/signin')
})

router.get('/signup', (req, res, next) => {
  res.render('authentication/signup')
})

export default router
