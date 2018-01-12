import express from 'express'

import lists from './lists'
import auth from './authentication'
import users from './users'

const routes = express.Router()

routes.get('/', (req, res) => res.redirect('/lists'))

routes.use('/lists', lists)
routes.use('/', auth)
routes.use('/users', users)

export default routes
