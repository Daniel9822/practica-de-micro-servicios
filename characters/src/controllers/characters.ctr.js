const response = require("../utils/response")

const getCharacter = async (req, res) => {
  throw new Error('hola')
  res.status(200).send('hola')
}



module.exports = {
  getCharacter
}