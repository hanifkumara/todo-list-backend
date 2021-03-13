const express = require('express')
const route = express.Router()
const { usersConfirmed, usersNotConfirmed, userUpdate, deleteUser, myProfile, userById} = require('../controllers/users')
const { verifyToken, roleAdmin } = require('../middlewares/verifyToken')

route
  .get('/confirmed', roleAdmin, usersConfirmed)
  .get('/not-confirmed', roleAdmin, usersNotConfirmed)
  .get('/my-profile', verifyToken, myProfile)
  .get('/:idUser', verifyToken, userById)
  .patch('/', roleAdmin, userUpdate)
  .delete('/:idUser', roleAdmin, deleteUser)

module.exports = route
