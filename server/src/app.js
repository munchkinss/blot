const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const http = require('http')
var routes = require('../routes/routes')
var mongoose = require('mongoose')
const port = process.env.PORT || 8081

mongoose.connect('mongodb://localhost/userdata', function () {
  console.log('Datebase Connected')
})

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use('/', routes)

http.createServer(app).listen(port)
