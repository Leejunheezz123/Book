const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')

router.get('/',(req, res, next) => {
    //login 창 보여주기
})
router.post('/',(req, res, next) => {
    // 실제 login 로직
})

module.exports = router