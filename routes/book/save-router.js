
const express = require('express')
const createError = require('http-errors')
const router = express.Router()
const { error, moveFile } = require('../../modules/util-module')
const { pool } = require('../../modules/mysql-module')
const uploader = require('../../middelwares/multer-book-mw')

router.post('/',uploader.fields([{name:'cover'},{name:'upfile'}]), async (req, res, next) => {
    let sql, values
    try{
        const { title, writer, content, _method, idx } = req.body
        const isUpdate = (_method === 'PUT' && idx)
        sql = isUpdate ? " UPDATE books " : " INSERT INTO books "
        sql += " SET title=?, writer=?, content=? "
        sql += isUpdate ? " WHERE idx= "+idx : ""
        values =[title, writer, content]
        const [rs] = await pool.execute(sql, values)

        
        
        if(req.files){
        let fieldname;
        for(let [k,[v]] of Object.entries(req.files)) {
            fieldname = k.substr(0, 1 ).toUpperCase()
            if(isUpdate) {
            sql= `SELECT idx, savename FROM files WHERE fidx =? AND fieldname=? AND status=?`
            values = [idx, fieldname, '1']
            let [rsf] = await pool.execute(sql, values)
            if(rsf.length>0){
                sql=" UPDATE files SET status ='0' WHERE idx ="+rsf[0].idx
                await pool.execute(sql)
                await moveFile(rsf[0].savename)
                }
            }
        sql = " INSERT INTO files SET oriname=?, savename=?, mimetype=?, size=?, fieldname=?, fidx=? "
        values = [v.originalname, v.filename, v.mimetype, v.size, fieldname, (isUpdate ? idx : rs.insertId)]
        await pool.execute(sql, values)
        }
        res.redirect(`/${req.lang}/book`)
        }
    }
    
    catch(err){ 
        next(createError(err))
    }
})

module.exports = router 