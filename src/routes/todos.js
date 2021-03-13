const express = require('express')
const route = express.Router()
const { verifyToken } = require('../middlewares/verifyToken')
const { addTodos , getTodos, deleteTodos, completedTodos, updateTodo, getTodosById} = require('../controllers/todos')

route
  .get('/', verifyToken, getTodos)
  .get('/:idTodo', verifyToken, getTodosById)
  .patch('/', verifyToken, updateTodo)
  .patch('/:idTodo', verifyToken, completedTodos)
  .post('/', verifyToken, addTodos)
  .delete('/:idTodo', verifyToken, deleteTodos)

module.exports = route
