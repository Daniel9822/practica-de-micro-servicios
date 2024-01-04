const router = require('express').Router()
const fs = require('fs')

const PATH = __dirname

const removeExt = (filename) => {
  return filename.split('.').shift()
}

fs.readdirSync(PATH).filter(filename => {
  
  const name = removeExt(filename)

  if(name !== 'index') {
    router.use(`/${name}`, require(`./${filename}`))
  }
})

module.exports = router