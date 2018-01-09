import express from 'express'

import lists from './lists'
import tasks from './tasks'
import users from './users'
import auth from './authentication'

const routes = express.Router()

routes.use('/lists', lists)
routes.use('/users', users)
routes.use('/', auth)
routes.use('/lists/tasks', tasks)

export default routes
