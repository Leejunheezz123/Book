const express = require('express')
const router = express.Router()
const { error } = require('../../modules/util-module')

router.use((req, res, next) => {
	//console.log(req.url)
	next( error(404) )
})


module.exports = router