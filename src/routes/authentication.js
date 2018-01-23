import express from 'express'
import { findUserByEmail, signin, signup } from "../actions"
const router = express.Router()

router.get('/signin', (req, res, next) => {
  const {user} = req.session
  const signup = true
  const signin = false
  res.render('authentication/signin', {message: "", user, signin, signup})
})

router.post('/signin', (req, res, next) => {
  const {email, password} = req.body

  findUserByEmail(email)
  .then(existingUser => {
    if(!existingUser) {
      res.render('authentication/signin', {message: "Account does not exist, please <a href='localhost:3000/signup' >sign up</a>"})
    } else {
      signin(email, password)
      .then(message => {
        if(message === "success") {
          res.redirect('/')
        } else {
          res.render('authentication/signin', {message: "Email or password incorrect"})
        }
      })
    }
  })
})


router.get('/signup', (req, res, next) => {
  const {user} = req.session
  const signup = false
  const signin = true
  res.render('authentication/signup', {message: "", user, signin, signup})
})

router.post('/signup', (req, res, next) => {
  const {name, email, password} = req.body

  findUserByEmail(email)
  .then(existingUser => {
    if(!existingUser){
      signup(name, email, password)
      .then(user => {
        req.session.user = user
        res.redirect('/')
      })
    } else {
      res.render('authentication/signup', {message: "Email already exists"})
    }
  })
})


router.get('/logout', (req, res, next) => {
  req.session.destroy()
  res.redirect('/')
})
export default router
