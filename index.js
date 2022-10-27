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

app.get('/courses_details/:id', (req, res) => {
  const id = req.params.id
  const relatedSubjects = coursesDetails.filter((c) => c.course_id === id)
  res.send(relatedSubjects)
})

app.get('/courses', (req, res) => {
  res.send(courses)
})

app.get('/coursesDetails', (req, res) => {
  res.send(coursesDetails)
})
app.get('/course_details/:id', (req, res) => {
  const id = req.params.id
  const relatedCourses = coursesDetails.find((c) => c.id === id)
  res.send(relatedCourses)
})


app.listen(port, () => {
  console.log('Uttaron Coaching Center', port)
})
