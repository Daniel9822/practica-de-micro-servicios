const server = require('./src/server')
const { PORT } = require('./config/envs')
const connect = require('./config/dbConnect')

server.listen(PORT, async () => {
  console.log('server is running')
  await connect()
})
