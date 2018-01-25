import express from 'express'

import { createTask } from '../actions'

const router = express.Router()

router.post('/addTask', (req, res, next) => {
  const {newTask, listId} = req.body

  createTask(newTask, listId)
  .then( () => {
    res.json({status: "Success"})
  })
  .catch(error => {
    res.json({status: "Error"})
  })
})

export default router
