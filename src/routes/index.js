import express from 'express'

import lists from './lists'
import auth from './authentication'
import users from './users'
// import tasks from './tasks'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/lists'))

routes.use('/lists', lists)
routes.use('/', auth)
routes.use('/users', users)
// routes.use('/lists/tasks', tasks)

export default routes
