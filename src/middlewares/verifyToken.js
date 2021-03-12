const jwt = require('jsonwebtoken')
const { response } = require('../helper/helpers')

module.exports = {
  verifyToken: (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
      return response(res, 401, null, { message: 'You not have Token!' })
    }
    let token = authorization.split(' ')
    token = token[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
          return response(res, 401, null, { message: 'Invalid Token' })
        } else if (err.name === 'TokenExpiredError') {
          return response(res, 401, null, { message: 'Token Expired' })
        }
      }
      req.myId = decoded.userId
      req.myEmail = decoded.email
      next()
    })
  },
  roleAdmin: (req,res,next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
      return response(res, 401, null, { message: 'You not have Token!' })
    }
    let token = authorization.split(' ')
    token = token[1]
    jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
      if (err) {
        if (err.name === 'JsonWebTokenError') {
          return response(res, 401, null, { message: 'Invalid Token' })
        } else if (err.name === 'TokenExpiredError') {
          return response(res, 401, null, { message: 'Token Expired' })
        }
      }
      if (decoded.role !== 'admin') {
        console.log(decoded)
        return response(res, 401, null, { message: 'Only admin allowed to access' })
      }
      req.myId = decoded.userId
      next()
    })
  }
}
