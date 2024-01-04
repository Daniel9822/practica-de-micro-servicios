const { model, Schema } = require('mongoose')

const characterSchema = new Schema(
  {
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: { type: String, ref: 'planet' },
    films: [{ type: String, ref: 'film' }]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

characterSchema.statics.list = async () => {
  return await characters.find({})
}

const characters = model('characters', characterSchema)

module.exports = characters