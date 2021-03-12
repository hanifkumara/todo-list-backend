const express = require('express')
const route = express.Router()
const routeAuth = require('./auth')
const routeUsers = require('./users')
const routeLabels = require('./labels')
const routeTodos = require('./todos')

route
  .use('/auth', routeAuth)
  .use('/users', routeUsers)
  .use('/labels', routeLabels)
  .use('/todos', routeTodos)

module.exports = route
