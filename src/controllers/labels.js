const { modelAddLabels, modelGetLabels } = require('../models/labels')
const { response } = require('../helper/helpers')
const { v4: uuidv4 } = require('uuid')

module.exports = {
  getLabels: async (req, res, next) => {
    try {
      const result = await modelGetLabels()
      return response(res, 200, result, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  },
  addLabels: async (req, res, next) => {
    try {
      const { label, description } = req.body
      const id = uuidv4()
      const data = {
        id,
        label,
        description
      }
      await modelAddLabels(data)
      return response(res, 201, {message: 'Add label success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  }
}