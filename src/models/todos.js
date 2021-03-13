const { actionQuery } = require('../helper/helpers')

module.exports = {
  modelGetTodos: (myId) => {
    return actionQuery('SELECT todos.*, labels.label FROM todos INNER JOIN labels ON labels.id = todos.idLabel WHERE todos.idUser = ? ORDER BY createdAt DESC' , myId)
  },
  modelTodosById: (idTodo) => {
    return actionQuery('SELECT todos.*, labels.label FROM todos INNER JOIN labels ON labels.id = todos.idLabel WHERE todos.id = ? ', idTodo)
  },
  modelAddTodos: (data) => {
    return actionQuery('INSERT INTO todos SET ?', data)
  },
  modelDeleteTodos: (idTodo) => {  
   return actionQuery('DELETE FROM todos WHERE id = ?', idTodo)
  },
  modelUpdateTodos: (data, idTodo) => {
    return actionQuery('UPDATE todos SET ? WHERE id = ? ', [data, idTodo])
  }
}