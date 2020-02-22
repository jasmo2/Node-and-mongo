const mongoose = require('mongoose')
const MovieSchema = new mongoose.Schema(
  {
    title: String,
    rank: Number,
    externalId: String
  },
  { autoIndex: false }
)

module.exports = MovieSchema
