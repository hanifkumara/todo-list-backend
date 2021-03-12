const { actionQuery } = require('../helper/helpers')

module.exports = {
  modelGetTodos: (myId) => {
    return actionQuery('SELECT todos.*, labels.label FROM todos INNER JOIN labels ON labels.id = todos.idLabel WHERE todos.idUser = ? ORDER BY createdAt DESC' , myId)
  },
  modelAddTodos: (data) => {
    return actionQuery('INSERT INTO todos SET ?', data)
  },
  modelDeleteTodos: (idTodos) => {  
   return actionQuery('DELETE FROM todos WHERE id = ?', idTodos)
  }
}