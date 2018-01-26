import express from 'express'

import { createTask, deleteTask } from '../actions'

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

router.delete('/deleteTask/:taskId', (req, res, next) => {
  const { taskId } = req.params

  deleteTask(taskId)
  .then( (deletedTaskId) => {
    res.json({status: "success"})
  })
  .catch(error => {
    res.json({status: "Error"})
  })
})

export default router
