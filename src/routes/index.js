import express from 'express'

import lists from './lists'
import tasks from './tasks'
import auth from './authentication'
import users from './users'
import { isLoggedIn } from './middleware'

const routes = express.Router()

routes.get('/', (req, res) => {
  res.redirect('/lists')
})

routes.use('/', auth)
routes.use(isLoggedIn)
routes.use('/lists', lists)
routes.use('/', tasks)
routes.use('/users', users)

export default routes
