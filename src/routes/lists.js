import express from 'express'

import { getAllLists, getTasksByListId, getList, createTask } from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {
  getAllLists()
  .then( lists => {
    console.log("Lists ===> ", lists);
    res.render('lists/allLists', {lists})
  })
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
  console.log("POST Route");
  const {newTask, listId} = req.body
  console.log("newTask Route ===>", newTask);
  console.log("listId Route ===>", listId);

  createTask(newTask, listId)
  .then(tasks => {
    console.log("updated Tasks ===> ", tasks);
    res.render('lists/list', {tasks})
  })
})

export default router
