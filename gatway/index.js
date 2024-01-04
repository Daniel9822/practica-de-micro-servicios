const server = require('./src/server')


const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`gatway is listener on port ${PORT} `)
})

