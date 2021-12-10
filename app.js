
/*************** global init **************/
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
const express = require('express')
const app = express()
const methodInit = require('./modules/method-init')
const logger = require('./middelwares/mogan-mw')
const session = require('./middelwares/session-mw')
const locals = require('./middelwares/locals-mw')


/*************** server init **************/
require('./modules/server-init')(app, process.env.PORT)

/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')
app.locals.pretty = true
app.locals.tabTitle ='Express 게시판'


/*************** middleware ***************/
app.use(logger)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(methodInit())
app.use(session(app))
app.use(locals)



/*************** static init **************/
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(path.join(__dirname, 'storages')))

/*************** logger init **************/
app.use(logger)





/*************** router init **************/
const langMW = require('./middelwares/lang-mw')
const bookRouter = require('./routes/book')
const apiBookRouter = require('./routes/api/book')
const authRouter = require('./routes/auth')
const apiAuthRouter = require('./routes/api/auth')

app.use(langMW)
app.use('/book', bookRouter)
app.use('/api/book', apiBookRouter)
app.use('/auth', authRouter)
app.use('/api/auth', apiAuthRouter)


/**************** error init **************/
const _404Router = require('./routes/error/404-router')
const _500Router = require('./routes/error/500-router')
app.use(_404Router)
app.use(_500Router)

