const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const sanbaySchema = new Schema({
  TenSanBay: {
    type: String,
    required: true,
  },
  QuocGia: {
    type: Number,
    required: true,
  },
});

// Create model for todo
const sanbay = mongoose.model('sanbay',sanbaySchema);

module.exports = sanbay;