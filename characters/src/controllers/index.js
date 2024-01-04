const catchError = require('../utils/catchError')
const { getCharacter } = require('./characters.ctr')

module.exports = {
  getCharacter: catchError(getCharacter)
}
