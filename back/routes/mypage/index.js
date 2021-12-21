const path = require('path')
const express = require('express')
const router = express.Router()
const { pool } = require('../../models/auth')
const userRouter = require('./user-router')
router.use('/user', userRouter)



module.exports = router