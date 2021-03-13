const express = require('express')
const route = express.Router()
const {  verifyToken ,roleAdmin } = require('../middlewares/verifyToken')
const { getLabels, addLabels, getLabelsById, updateLabel, deleteLabel } = require('../controllers/labels')

route
  .get('/', verifyToken, getLabels)
  .get('/:idLabel', roleAdmin, getLabelsById)
  .post('/', roleAdmin, addLabels)
  .patch('/', roleAdmin, updateLabel)
  .delete('/:idLabel', roleAdmin, deleteLabel)

module.exports = route
