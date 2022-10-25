const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json')

const coursesDetails = require('./data/courseDetails.json')

app.get('/', (req, res) => {
  res.send('Uttaron api running')
})

app.get('/courses', (req, res) => {
  console.log(req.params.id)
})

app.listen(port, () => {
  console.log('Uttaron Coaching Center', port)
})
