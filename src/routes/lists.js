import express from 'express'

import { getAllLists, getTasksByListId, getList, createTask } from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
    getAllLists()
    .then( lists => {
      res.render('lists/allLists', {lists, user: req.session.user})
    })
})

router.get('/:list_id', (req, res, next) => {
  const {list_id} = req.params

  getList(list_id)
  .then(list =>{
    getTasksByListId(list.id)
    .then(tasks => {
      res.render('lists/list', {list, tasks, user: req.session.user})
    })
  })
})

export default router
