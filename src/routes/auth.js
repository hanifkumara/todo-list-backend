const express = require('express')
const route = express.Router()
const { login, signup } = require('../controllers/auth')

route
  .post('/login', login)
  .post('/signup', signup)

module.exports = route
