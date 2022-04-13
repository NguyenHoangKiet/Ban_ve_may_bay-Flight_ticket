const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const hanggheSchema = new Schema({
  TenHangGhe: {
    type: String,
    required: true,
  },
  PhiThem: {
    type: Number,
    required: true,
  },
});

// Create model for todo
const hangghe = mongoose.model('hangghe',hanggheSchema);

module.exports = hangghe;