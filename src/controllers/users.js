const { confirmed, notConfirmed, update, deleteUser , profile} = require('../models/users')
const { response } = require('../helper/helpers')

module.exports = {
  myProfile: async (req, res, next) => {
    try {
      const {myId} = req
      const result = await profile(myId)
      return response(res, 200, result, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Internal server error'})
    }
  },
  usersConfirmed: async (req, res, next) => {
    try {
      const result = await confirmed()
      if (result.length < 1) {
        return response(res, 200, {message: 'User confirmed null'}, null)
      }
      return response(res, 200, result, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Internal server error'})
    }
  },
  usersNotConfirmed: async (req, res, next) => {
    try {
      const result = await notConfirmed()
      if (result.length < 1) {
        return response(res, 200, {message: 'User not confirmed null'}, null)
      }
      return response(res, 200, result, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Internal server error'})
    }
  },
  userUpdate: async (req, res, next) => {
    try {
      const { idUser, confirmation } = req.body
      const data = {}
      if (confirmation) {
        data.confirmation = `${req.body.confirmation}`;
      }
      await update(data, idUser)
      return response(res, 200, {message: 'Confirmation account success!!'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Internal server error'}) 
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const {idUser} = req.params
      await deleteUser(idUser)
      return response(res, 200, {message: 'Delete user success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Internal server error'}) 
    }
  }
}