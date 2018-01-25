import express from 'express'

import { getAllLists, getTasksByListId, getList, createTask, createList } from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
    const user = req.session.user
    getAllLists()
    .then( lists => {
      res.render('lists/allLists', {lists, user})
    })
})

router.post('/createList', (req, res, next) => {
  const user_id = req.session.user.id
  const {title} = req.body

  createList(title, user_id)
  .then( () => {
    res.json({status: "success"})
  })
  .catch(error => {
    console.error("CreateList Route: ",error)
    res.json({status: "Error"})
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
