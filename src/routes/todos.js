const express = require('express')
const route = express.Router()
const { verifyToken } = require('../middlewares/verifyToken')
const { addTodos , getTodos, deleteTodos} = require('../controllers/todos')

route
  .get('/', verifyToken, getTodos)
  .post('/', verifyToken, addTodos)
  .delete('/:idTodos', verifyToken, deleteTodos)

module.exports = route
