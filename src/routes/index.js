const express = require('express')
const route = express.Router()
const routeAuth = require('./auth')

route
  .use('/auth', routeAuth)

module.exports = route
