const express = require('express')
const { createProxyMiddleware } = require("http-proxy-middleware")
const morgan = require('morgan')
const onProxyReq = require('./utils/onRequest')

const server = express()

server.use(morgan('dev'))
server.use(express.json())

server.use('/characters', createProxyMiddleware({
  target: 'http://localhost:3000',
  onProxyReq,
  changeOrigin: true
}))


module.exports = server