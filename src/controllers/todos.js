const { modelAddTodos, modelGetTodos, modelDeleteTodos } = require('../models/todos')
const { response } = require('../helper/helpers')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  getTodos: async (req, res, next) => {
    try {
      const {myId} = req
      const result = await modelGetTodos(myId)
      return response(res, 200, result, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  },
  addTodos: async (req, res, next) => {
    try {
      const {myId} = req
      const { idLabel, task } = req.body
      const id = uuidv4()
      const data = {
        id,
        idUser: myId,
        idLabel,
        task
      }
      await modelAddTodos(data)
      return response(res, 201, {message: 'Add todos success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  },
  deleteTodos: async (req, res, next) => {
    try {
      const {idTodos} = req.params
      await modelDeleteTodos(idTodos)
      return response(res, 200, {message: 'Delete todos success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  }
}