const express = require('express')
const morgan = require('morgan')
const routes = require('./routers')

const server = express()

server.use(express.json())
server.use(morgan('dev'))

server.use(routes)


server.use((err, req, res, next) => {
  if(err) {
    res.status(err.statusCode || 500).send({
      error: true,
      message: err.message
    })
  }
})

module.exports = server