const path = require('path')
const express = require('express')
const router = express.Router()
const { error, absPath } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')

router.get('/:idx', async(req, res, next) => {
    let sql, values
    try{
        sql = "SELECT savename, oriname FROM files WHERE stuats > 0 AND idx ="+req.params.idx
        const [[{savename, oriname}]] = await pool.execute(sql)
        res.status(200).download(absPath(savename), oriname)
    }
    catch(err){
        next(error(err))
    }
})


module.exports = router