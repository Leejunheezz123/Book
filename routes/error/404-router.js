const express = require('express')
const router = express.Router()
const createError = require('http-errors')
const { error } = require('../../modules/util-module')

router.use((req, res, next) => {
	next( error(404) )
	next( createError(404))
})


module.exports = router