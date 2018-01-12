import express from 'express'

import { getAllLists, getTasksByListId, getList } from '../actions'

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
    console.log("List ===> ", list);
    getTasksByListId(list.id)
    .then(tasks => {
      console.log("tasks ===> ", tasks);
      res.render('lists/list', {list, tasks})
    })
  })
})

export default router
