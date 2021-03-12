const express = require('express')
const route = express.Router()
const { roleAdmin } = require('../middlewares/verifyToken')
const { getLabels, addLabels } = require('../controllers/labels')

route
  .get('/', roleAdmin, getLabels)
  .post('/', roleAdmin, addLabels)

module.exports = route
