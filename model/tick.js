const mongoose = require('mongoose');
const { Schema } = mongoose;

const tickSchema = new Schema({
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String
});

module.exports = mongoose.model('Tick2', tickSchema);
