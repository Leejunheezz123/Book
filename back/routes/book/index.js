const path = require('path')
const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')

const formRouter =require('./form-router')
const listRouter =require('./list-router')
const viewRouter =require('./view-router')
const downloadRouter =require('./download-router')
const saveRouter =require('./save-router')
const deleteRouter =require('./delete-router')



router.post('/', saveRouter)     //FORM/POST: 저장, 수정 -FORM 전송
router.delete('/', deleteRouter)     //FORM/DELETE:삭제 -form전송
router.use('/form', formRouter)      // HTML:글작성페이지
router.use('/view', viewRouter)     //HTML/GET: 상세 페이지
router.use('/download', downloadRouter)     //HTML/GET: 상세 페이지
router.use('/', listRouter)     //HTML/GET: 리스트페이지


module.exports = router


/*
GET   /book, /book/:page 전체리스트 LIST -page
GET  /book/view/1      상세리스트 view
GET   /book/form             신규CREATE
GET   /book/form/1             수정UPDATE
POST   /book              저장 save
POST   /book              저장 save
PUT   /book              업데이트 UPDATE
DELETE   /book            삭제 delete

*/