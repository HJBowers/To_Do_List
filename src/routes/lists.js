import express from 'express'

import { getAllLists, getTasksByListId } from '../actions'

const router = express.Router()

router.get('/', (req, res, next) => {

  getAllLists()
  .then( lists => {
    console.log("Lists ===> ", lists);
    res.render('lists/allLists', {lists})
  })
})

export default router
