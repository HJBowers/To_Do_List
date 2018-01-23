import express from 'express'
import { findUserByEmail, signin, signup } from "../actions"
const router = express.Router()

router.get('/signin', (req, res, next) => {
  res.render('authentication/signin', {message: "", user: req.session.user, signinLink: true, signupLink: false})
})

router.post('/signin', (req, res, next) => {
  const {email, password} = req.body

  findUserByEmail(email)
  .then(existingUser => {
    if(!existingUser) {
      res.render('authentication/signin', {message: "Account does not exist, please <a href='localhost:3000/signup' >sign up</a>", user: req.session.user, signinLink: true, signupLink: false})
    } else {
      signin(email, password)
      .then(results => {
        if(results.message === "success") {
          req.session.user = results.user
          res.redirect('/')
        } else if(results.message === "fail") {
          res.render('authentication/signin', {message: "Email or password incorrect", user: req.session.user, signinLink: true, signupLink: false})
        }
      })
    }
  })
})

router.get('/signup', (req, res, next) => {
  res.render('authentication/signup', {message: "", user: req.session.user, signinLink: false, signupLink: true})
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
      res.render('authentication/signup', {message: "Email already exists, please <a href='localhost:3000/signin' >sign in</a>", user: req.session.user, signinLink: false, signupLink: true})
    }
  })
})

router.get('/logout', (req, res, next) => {
  req.session.destroy()
  res.redirect('/')
})
export default router
