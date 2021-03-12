const { login, insertUser, checkEmail } = require('../models/auth')
const bcrypt = require('bcryptjs')
const { response } = require('../helper/helpers')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')

module.exports = {
  signup: async (req, res, next) => {
    try {
      const id = uuidv4()
      const {username, email, password, confirmation} = req.body
      const result = await checkEmail(email)
      if (result.length > 0) return response(res, 401, null, {message: 'Email Already exist!!'})
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(password, salt, async function (err, hash) {
          const data = {
            id,
            username,
            email,
            role: 'user',
            confirmation: confirmation || 0,
            password: hash,
          }
          const resultInsert = await insertUser(data)
          return response(res, 200, { message: 'Registered success!!' }, null)
        })
      })
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body
      const result = await checkEmail(email)
      if (result.length < 1) return response(res, 401, null, { message: 'Email Unlisted!!' })
      if (result[0].confirmation === 0) return response(res, 401, null, { message: 'Your account has not been confirmed by Admin' })
      const user = result[0]
      bcrypt.compare(password, user.password, function (err, resCheck) {
        if (!resCheck) return response(res, 401, null, { message: 'Password Wrong!!' })
        delete user.password

        const payload = {
          userId: user.id,
          email: user.email,
          role: user.role
        }
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '5h' }, function (err, token) {
          user.token = token
          return response(res, 200, user, null)
        })
      })
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  }
}