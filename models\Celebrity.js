const mongoose = require('mongoose');

const celebritySchema = new mongoose.Schema({
  name: String,
  bio: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;