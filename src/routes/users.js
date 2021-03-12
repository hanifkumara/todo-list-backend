const express = require('express')
const route = express.Router()
const { usersConfirmed, usersNotConfirmed, userUpdate, deleteUser, myProfile} = require('../controllers/users')
const { verifyToken, roleAdmin } = require('../middlewares/verifyToken')

route
  .get('/confirmed', roleAdmin, usersConfirmed)
  .get('/not-confirmed', roleAdmin, usersNotConfirmed)
  .get('/my-profile', verifyToken, myProfile)
  .patch('/', roleAdmin, userUpdate)
  .delete('/:idUser', roleAdmin, deleteUser)

module.exports = route
