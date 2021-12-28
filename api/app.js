
/*************** global init **************/
require('dotenv').config()
const path = require('path')
const express = require('express')
const app = express()

const logger = require('./middlewares/mogan-mw')

/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT)


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))






/*************** logger init **************/
app.use(logger)





/*************** router init **************/


/**************** error init **************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')

app.use(_404Router)
app.use(_500Router)
