const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseDate: Date,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;