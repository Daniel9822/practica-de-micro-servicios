const mongoose = require('mongoose')
const { MONGO_URI } = require('./envs')

const connect = async () => {
  await mongoose.connect(MONGO_URI).then((res) => {
    console.log('Database is connected')
  })
}

module.exports = connect
