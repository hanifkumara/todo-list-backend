const { actionQuery } = require('../helper/helpers')

module.exports = {
  profile: (myId) => {
    return actionQuery(`SELECT * FROM users WHERE id = ? `, myId)
  },
  confirmed: () => {
    return actionQuery(`SELECT * FROM users WHERE NOT role = 'admin' AND confirmation = 1 ORDER BY createdAt DESC`)
  },
  notConfirmed: () => {
    return actionQuery('SELECT * FROM users WHERE confirmation = 0 ORDER BY createdAt DESC')
  },
  update: (data, idUser) => {
    return actionQuery(`UPDATE users SET ? WHERE id = ? `, [data, idUser])
  },
  profile: (idUser) => {
    return actionQuery('SELECT * FROM users WHERE id = ?', idUser)
  },
  deleteUser: (idUser) => {
    return actionQuery('DELETE FROM users WHERE id = ?', idUser)
  }
}