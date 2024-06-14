import express from 'express'

import { editUser, getUsers  } from '../controllers/userController.js'
import { createReport, getReports } from '../controllers/reportController.js'
import { assignPost, createPost, getPosts } from '../controllers/postController.js'
  import { isAuthenticated, isAdmin } from "../middlewares/auth.js";

const router  = express.Router()

router.get('/getUsers', getUsers)
router.post('/editUser', editUser)
router.post('/createReport', createReport)
router.get('/getReports', getReports)
router.post('/createPost', createPost)
router.get('/getPosts', getPosts)
router.post('/assignPost', isAuthenticated, assignPost)

export default router