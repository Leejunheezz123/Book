const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')
const {findUser} = require('../../models/auth')

router.get('/',async (req, res, next) => {
    //login 창 보여주기
    await findUser('id',1)
    res.send()
})
router.post('/',(req, res, next) => {
    // 실제 login 로직
})

module.exports = router 