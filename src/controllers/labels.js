const { modelAddLabels, modelGetLabels, modelLabelId, modelUpdateLabel, modelDeleteLabel } = require('../models/labels')
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
  getLabelsById: async (req, res, next) => {
    try {
      const {idLabel} = req.params
      const result = await modelLabelId(idLabel)
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
  },
  updateLabel: async (req, res, next) => {
    try {
      const { idLabel, label, description } = req.body
      const data = {}
      if (label) {
        data.label = `${req.body.label}`;
      }
      if (description) {
        data.description = `${req.body.description}`;
      }
      await modelUpdateLabel(data, idLabel)
      return response(res, 200, {message: 'Update label success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  },
  deleteLabel: async (req, res, next) => {
    try {
      const { idLabel } = req.params
      await modelDeleteLabel(idLabel)
      return response(res, 200, {message: 'Delete label success'}, null)
    } catch (error) {
      console.log(error)
      return response(res, 500, null, {message: 'Something went wrong!!'})
    }
  }
}