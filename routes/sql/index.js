const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')

const mysql = require('mysql2/promise')
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    //port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connetionLimit:10,
    queueLimit:0
});


router.get('/list',async (req, res, next) => {
    let sql ='SELECT * FROM books'
    let r= await pool.excute(sql)
    res.status(200).json(r)
})

//let sql ="INSERT INTO books SET title='"+title+"',writer='"+writer+"',contetnt='"+content+"';"
router.get('/create', async (req, res, next) => {
    let title ='홍길동전'
    let writer = '허균'
    let content ='아버지를 아버지라...'
    let sql = 'INSERT INTO books SET title=?, writer=?,content?'
    let values =[title, writer, content]
    let r= await pool.execute(sql, values)
    res.status(200).json(r) 
})

module.exports = router