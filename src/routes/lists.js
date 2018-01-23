import express from 'express'

import { getAllLists, getTasksByListId, getList, createTask } from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  if(!req.session.user){
    res.redirect("/signup")
  } else {
    getAllLists()
    .then( lists => {
      res.render('lists/allLists', {lists})
    })
  }
})

router.get('/:list_id', (req, res, next) => {
  const {list_id} = req.params

  getList(list_id)
  .then(list =>{
    getTasksByListId(list.id)
    .then(tasks => {
      res.render('lists/list', {list, tasks})
    })
  })
})

router.post('/addTask', (req, res, next) => {
  const {newTask, listId} = req.body

  createTask(newTask, listId)
  .then(() => {
    res.json({status: "Success"})
  })
  .catch(error => {
    console.error(error)
    res.json({status: "Error"})
  })
})

export default router
