const mongoose = require('mongoose')
const MoviesSchema = require('./moviesSchema')

mongoose.connect(
  process.env.DATABASE_URL || 'mongodb://localhost/github-movies',
  { autoIndex: false, useNewUrlParser: true }
)
const db = mongoose.connection

module.exports = {
  Movies: mongoose.model('Movies', MoviesSchema)
}
