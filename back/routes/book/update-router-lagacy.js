const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')

router.post('/:idx',async (req, res, next) => {
    try{
        const {title, writer, content, idx} = req.body
        const sql ='UPDATE books books SET title=?, writer=?, content=? WHERE idx=?'
        const values =[title, writer, content, idx]
        const [rs] = await pool.execute(sql, values)
        if(rs.affectedRows===1)res.redirect(`/${req.lang}/book`)
        else next(error(500,'데이터가 수정되지 않았습니다.'))
    } 
    catch(err){
        next(error(500, err))
    }
})

module.exports = router 