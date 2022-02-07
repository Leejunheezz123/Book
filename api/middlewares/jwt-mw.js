const jwt = require('jsonwebtoken')
const createError = require('http-errors')
const { findApiUser } = require('../models/auth')

const isApiUser = async (req, res, next)=> {
  const errMsg = 'Authorization Fail'
try {
  const domain = req.protocol + '://' + req.headers.host
  const apikey = req.query.apikey

  if(req.cookies.token) {

  }
  else if (domain && apikey) {
    const { success } = await findApiUser(domain, apikey)
    if (success){
      const token = jwt.sign({ domain, apikey }, process.env.JWT_SALT, { exiresIn: '2h'})
      res.cookie('token', token, {expires: new Date(Date.now() + 7200000) })
      next()
    }
    else {

    }
  }
  else {
    next(createError(401, errMsg ))
  }
}
catch (err) {
  next(createError(err))
}
}

module.exports = {isApiUser}