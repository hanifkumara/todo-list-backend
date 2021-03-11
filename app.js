require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT =  process.env.PORT || 5000
const router = require('./src/routes/index')
const { response } = require('./src/helper/helpers')

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/v1/', router)

app.get('/', (req, res) => {
  res.json({
    'name': 'Hanif Kumara',
    'email': 'hanifkumara@gmail.com'
  })
})

app.use('*', (req, res, next) => {
  const error = new Error('URL Not Found')
  error.status = 400
  return next(error)
})

app.use((err, req, res, next) => {
  response(res, err.status = 500, null, { message: err.message })
})

app.listen(PORT, ()=>{
  console.log(`Server is running port ${PORT}`)
})