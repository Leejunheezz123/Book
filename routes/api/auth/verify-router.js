const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../../modules/util-module')
const { mysql,pool } = require('../../../modules/mysql-module')
const {isVerify} = require('../../../models/auth')

router.get('/verify',async(req, res, next) => {
    // userid, email 중복 검증
    try{
        const isUsed = await isVerify(req.query.key, req.query.value)
        res.status(200).json({isUsed})
    }
    catch(err){
        next(createError(err))
    }
})

module.exports = router  