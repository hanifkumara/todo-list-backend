const { actionQuery } = require('../helper/helpers')

module.exports = {
  modelGetLabels: () => {
    return actionQuery('SELECT * FROM labels')
  },
  modelAddLabels: (data) => {
    return actionQuery('INSERT INTO labels SET ?', data)
  }
}