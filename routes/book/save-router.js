
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')
const uploader = require('../../middelwares/multer-book-mw')

router.post('/',uploader.fields([{name:'cover'},{name:'upfile'}]), async (req, res, next) => {
    let sql, values
    try{
        const {title, writer, content,_method, idx} = req.body
        const isUpdate = (_method ==='PUT' && idx)
        sql = isUpdate ? 'UPDATE books' : 'INSERT INTO books'
        sql += 'SET title=?, writer?, content=?'
        sql += isUpdate ? 'WHERE idx='+idx : ''
        values =[title, writer, content]
        const [rs] = await pool.execute(sql, values)

    /* if(req.files) {
        for(let[k,[v]] of Object.entries(req.files)) {
        let {originalname, filename, mimetype, size}= v
        sql = (_method ==='PUT' && idx ) ? 'UPDATE files' : 'INSERT INTO filess'
        sql += ' oriname=?, savename=?, mimetype=?, size=?, fieldname=?'
        values = [rs.insertId, originalname, filename, mimetype, size, k.substr(0,1).toUpperCase()]
        await pool.execute(sql, values)
        }  
    }
    */ 
    res.redirect(`/${req.lang}/book`)
    }
    
    catch(err){ 
        next(error(500, err))
    }
})

module.exports = router 