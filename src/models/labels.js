const { actionQuery } = require('../helper/helpers')

module.exports = {
  modelGetLabels: () => {
    return actionQuery('SELECT * FROM labels ORDER BY createdAt DESC')
  },
  modelAddLabels: (data) => {
    return actionQuery('INSERT INTO labels SET ?', data)
  },
  modelLabelId: (idLabel) => {
    return actionQuery('SELECT * FROM labels WHERE id = ? ', idLabel)
  },
  modelUpdateLabel: (data, idLabel) => {
    return actionQuery('UPDATE labels SET ? WHERE id = ?', [data, idLabel])
  },
  modelDeleteLabel: (idLabel) => {
    return actionQuery('DELETE FROM labels WHERE id = ? ', idLabel)
  }
}