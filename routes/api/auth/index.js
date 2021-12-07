const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../../modules/util-module')
const { pool } = require('../../../modules/mysql-module')
const verifyRouter =require('./verify-router')

router.use('/', verifyRouter)

module.exports = router 