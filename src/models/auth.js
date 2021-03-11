const { actionQuery } = require('../helper/helpers')

module.exports = {
  insertUser: (data) => {
    return actionQuery(`INSERT INTO users SET ?`, data)
  },
  login: () => {
    return actionQuery('SELECT * FROM users')
  },
  checkEmail: (email) => {
    return actionQuery(`SELECT * FROM users WHERE email = '${email}' `)
  }
}